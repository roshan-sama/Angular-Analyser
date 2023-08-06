
const tsMorph = require("ts-morph");
const typedefs = require("./typedefs");
const { angularHttpClientType } = require("./constants");

/** @type {typedefs.classSubType} */
let classKind
/** @type {typedefs.nodeType} */
let nodeType
let declarationType

let nodeName = ''
let initializer = ''

let serviceDecorator;
let issuesList = []

const baseNodeObject = {
    Name: '',
    Type: '',
    'File Path': '',
    'Non Filterable': {}
}
Object.freeze(baseNodeObject)

const syntaxKindToNodeObjectMap = {
    [tsMorph.SyntaxKind.SourceFile]: (node) => {

        const returnObject = { ...baseNodeObject }
        returnObject.Name = node.getBaseName()
        returnObject.Type = 'JS Source File'
        returnObject['File Path'] = node.getFilePath()

        return {
            nodeObject: returnObject,
            id: getNodeId(node.getSourceFile(), node.getBaseName())
        }
    },
    [tsMorph.SyntaxKind.FunctionDeclaration]: (node) => {
        nodeName = `${node.getName()} (JS Function)`
        const returnObject = { ...baseNodeObject }

        returnObject.Name = nodeName
        returnObject.Type = 'JS Function'
        returnObject['File Path'] = node.getSourceFile().getFilePath()

        return {
            nodeObject: returnObject,
            id: getNodeId(node.getSourceFile(), nodeName)
        }
    },
    /**
     * Function for handling ClassDeclaration nodes.
     * @param {tsMorph.ClassDeclaration} node
     * @returns {typedefs.NodeObjectWithId}
     */
    [tsMorph.SyntaxKind.ClassDeclaration]: (node) => {
        issuesList = {}
        let nonFilterableObject = undefined

        //TODO: Enable users to select decorators to obtain in main file
        // Would be a useful feature
        classKind = undefined
        nodeType = 'JS Class'

        const isComponent = node.getDecorators().some((decorator) => decorator.getName() === 'Component')

        if (isComponent) {
            issuesList = {}
            classKind = 'Component'
            nodeType = 'Angular Component'
            serviceDecorator = node.getDecorators().find((decorator) => decorator.getName() === 'Component')

            const properties = serviceDecorator.getArguments()[0].getProperties()

            if (properties.length) {
                const providerProperty = properties.find((property) => property.getStructure().name === 'providers')

                if (providerProperty) {
                    issuesList['Service DI Warning'] = node.getName() + ": Review Angular Service Injector for injected services"
                }

                // Get the property called selector from properties:
                const selectorProperty = properties.find((property) => property.getStructure().name === 'selector')
                let filePathToTemplate = undefined

                const templateUrlProperty = properties.find((property) => property.getStructure().name === 'templateUrl')
                if (templateUrlProperty) {
                    filePathToTemplate = templateUrlProperty.getDescendantsOfKind(tsMorph.SyntaxKind.StringLiteral)[0]?.getLiteralValue()
                } else {
                    const templateProperty = properties.find((property) => property.getStructure().name === 'template')
                    if (templateProperty) {
                        filePathToTemplate = node.getSourceFile().getBaseName()
                    }
                }

                if (nonFilterableObject === undefined) {
                    nonFilterableObject = {}
                }

                nonFilterableObject.selectorProperty = selectorProperty?.getDescendantsOfKind(tsMorph.SyntaxKind.StringLiteral)[0]?.getLiteralValue()
                if (filePathToTemplate) {
                    nonFilterableObject.filePathToTemplate = filePathToTemplate
                }
            }

            // if (structure.providers !== 'providedIn' || structure.initializer.replaceAll("'", "") !== 'root') {
            //     issuesList['Service DI Warning'] = "Review Angular Service Injector for accuracy" + serviceDecorator.getText()
            // }

        }
        if (node.getDecorators().some((decorator) => decorator.getName() === 'Injectable')) {
            classKind = 'Service'
            nodeType = 'Angular Service'
            // TODO: Refactor till end region
            //#region refactor region 1
            serviceDecorator = node.getDecorators().find((decorator) => decorator.getName() === 'Injectable')

            if (serviceDecorator.getArguments().length === 0) {
                issuesList['Service DI Error'] = node.getName() + ": Angular Service Injector is not provided in root. (https://angular.io/guide/architecture-services#providing-services)"
            } else {
                const structure = serviceDecorator.getArguments()[0].getProperties()[0]?.getStructure()
                if (structure.name !== 'providedIn' || structure.initializer.replaceAll("'", "") !== 'root') {
                    issuesList['Service DI Error'] = node.getName() + ": Angular Service Injector is not provided in root: " + serviceDecorator.getText()
                }

            }
            //#region refactor region 1

        }
        if (node.getDecorators().some((decorator) => decorator.getName() === 'NgModule')) {
            classKind = 'Module'
            nodeType = 'Angular Module'
        }
        // TODO: See if we should add a flag to ignore references in import statements
        // And if the sourcefile is the highest level found, we could add the 
        // highest Syntax kind that is one level below the source file that references
        // the Identifier
        nodeName = `${node.getName()} (${classKind ? classKind : 'JS Class'})`

        const returnObject = { ...baseNodeObject }

        returnObject.Name = nodeName
        returnObject.Type = nodeType
        returnObject['File Path'] = node.getSourceFile().getFilePath()

        if (nonFilterableObject !== undefined) {
            returnObject['Non Filterable'] = nonFilterableObject
        }

        const finalNode = {
            nodeObject: { ...returnObject, ...issuesList },
            id: getNodeId(node.getSourceFile(), nodeName)
        }
        return finalNode
    },
    /**
     * Function for handling VariableDeclaration nodes.
     * @param {tsMorph.VariableDeclaration} node
     * @returns {typedefs.NodeObjectWithId}
     */
    [tsMorph.SyntaxKind.VariableDeclaration]: (node) => {
        initializer = node.getInitializer();
        declarationType = node.getVariableStatement().getDeclarationList().getDeclarationKind()
        // Check if initializer is a function
        if (initializer && tsMorph.Node.isArrowFunction(initializer)) {
            nodeName = `${node.getName()} (JS Arrow Function - ${declarationType})`
            nodeType = 'JS Arrow Function'
        } else {
            nodeName = `${node.getName()} (${declarationType})`
            nodeType = getNodeTypeFromDeclarationType(declarationType)
        }

        const returnObject = { ...baseNodeObject }

        returnObject.Name = nodeName
        returnObject.Type = nodeType
        returnObject['File Path'] = node.getSourceFile().getFilePath()
        return {
            nodeObject: returnObject,
            id: getNodeId(node.getSourceFile(), nodeName)
        }
    },
}

let handler
let nodeToReturn
/**
 * Takes in a ts-morph node and generates the Node Object based on the node's SyntaxKind
 * @param {tsMorph.Node} node - The call expression to get the function identifier from.
 * @returns {typedefs.NodeObjectWithId} The Node Object representing this node
 */
const getNodeObject = (node) => {
    handler = syntaxKindToNodeObjectMap[node.getKind()];
    if (handler) {
        nodeToReturn = handler(node)
        return nodeToReturn;
    } else {
        console.error("No mapping to obtain node information for node type " + node.getKindName())
    }
    // add your else case here, if required
};

let fileCount = 0
let fileToIndexMap = {}

function ensureFileInMap(sourceFilename) {
    if (!fileToIndexMap[sourceFilename]) {
        fileToIndexMap[sourceFilename] = fileCount
        fileCount = fileCount + 1
    }
}

/**
* Gets the identifier of the function called in a call expression.
* @param {tsMorph.SourceFile} analysisSourceFile - The source file
* @param {string} nodeName - The node's name
* @returns {string} The unique identifier for the node
*/
const getNodeId = (analysisSourceFile, nodeName) => {
    ensureFileInMap(analysisSourceFile.getFilePath())
    return fileToIndexMap[analysisSourceFile.getFilePath()] + ": " + analysisSourceFile.getBaseNameWithoutExtension() + " - " + nodeName
}

/**
* Gets the node type corresponding to the declataion type (const, let, var)
* @param {'const' | 'let' | 'var'} declarationType - The node's name
* @returns {typedefs.nodeType} The node type
*/
function getNodeTypeFromDeclarationType(declarationType) {
    if (declarationType === 'const') {
        return 'JS Const'
    }
    if (declarationType === 'let') {
        return 'JS Let variable'
    }
    if (declarationType === 'var') {
        return 'JS Var variable'
    }
}

/**
* Return a list of api call methods present in the Angular Service
* @param {'tsMorph.Node'} angularServiceClassNode - The Angular Service node
* @returns {typedefs.NodeObjectWithId[]} The node type
*/
const getApiCallNodes = (angularServiceClassNode) => {
    const constructors = angularServiceClassNode.getConstructors()

    if (constructors.length !== 1) {
        console.error(`Angular Service has ${constructors.length} constructors. Expected one constructor injected via constructor injection.`)
        return []
    }

    let httpClientVariableName
    constructors[0].getStructure().parameters.forEach((parameter) => {
        if (parameter.type === angularHttpClientType) {
            httpClientVariableName = parameter.name
        }
    })

    if (!httpClientVariableName) {
        return []
    }

    /** @type typedefs.NodeObject[] */
    const apiCallNodes = []

    const methods = angularServiceClassNode.getMethods();
    methods.forEach(method => {
        // Find references to httpClient in each method
        const references = method
            .getDescendants()
            .filter(descendant => descendant.getKindName() === 'PropertyAccessExpression'
                && descendant.getFirstChildByKind(tsMorph.SyntaxKind.Identifier).getText() === 'httpClient');

        references.forEach(ref => console.log(`In method ${method.getName()}, reference: ${ref.getText()}`));
        apiCallNodes.push({
            Name: method.getName(),
            Type: 'Angular Service API Call',
            'File Path': method.getSourceFile().getFilePath(),
        })
    });
}

module.exports = {
    getNodeObject,
    getNodeId,
    getApiCallNodes
};