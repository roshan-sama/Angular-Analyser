
const tsMorph = require("ts-morph");
const typedefs = require("./typedefs");

/** @type {typedefs.classSubType} */
let classKind
/** @type {typedefs.classType} */
let nodeType
let declarationType

let nodeName = ''
let initializer = ''

/**
 * Takes in a ts-morph node and generates the Node Object based on the node's SyntaxKind
 * @param {tsMorph.Node} node - The call expression to get the function identifier from.
 * @returns {typedefs.NodeObjectWithId} The Node Object representing this node
 */
const getNodeObject = (node) => {
    switch (node.getKind()) {
        case tsMorph.SyntaxKind.SourceFile: {
            return {
                nodeObject: {
                    Name: node.getBaseName(),
                    Type: 'Source File',
                    "File Path": node.getFilePath()
                },
                id: getNodeId(node.getSourceFile(), node.getBaseName())
            }
        }
        case tsMorph.SyntaxKind.FunctionDeclaration: {
            nodeName = `${node.getName()} (Function)`
            return {
                nodeObject: {
                    Name: nodeName,
                    Type: 'Function',
                    'File Path': node.getSourceFile().getFilePath()
                },
                id: getNodeId(node.getSourceFile(), nodeName)
            }
        }
        case tsMorph.SyntaxKind.ClassDeclaration: {
            if (node instanceof tsMorph.ClassDeclaration) {
                //TODO: Enable users to select decorators to obtain in main file
                // Would be a useful feature
                classKind = undefined
                nodeType = 'Class'
                if (node.getDecorators().some((decorator) => decorator.getName() === 'Component')) {
                    classKind = 'Component'
                    nodeType = 'Angular Component'
                }
                if (node.getDecorators().some((decorator) => decorator.getName() === 'Injectable')) {
                    classKind = 'Service'
                    nodeType = 'Angular Service'
                }
                if (node.getDecorators().some((decorator) => decorator.getName() === 'NgModule')) {
                    classKind = 'Module'
                    nodeType = 'Angular Module'
                }
                // TODO: See if we should add a flag to ignore references in import statements
                // And if the sourcefile is the highest level found, we could add the 
                // highest Syntax kind that is one level below the source file that references
                // the Identifier
                nodeName = `${node.getName()} (${classKind ? classKind : 'Class'})`
                return {
                    nodeObject: {
                        Name: nodeName,
                        Type: nodeType,
                        'File Path': node.getSourceFile().getFilePath()
                    },
                    id: getNodeId(node.getSourceFile(), nodeName)
                }
            }
        }
            break;
        case (tsMorph.SyntaxKind.VariableDeclaration): {
            if (node instanceof tsMorph.VariableDeclaration) {
                initializer = node.getInitializer();
                declarationType = node.getVariableStatement().getDeclarationList().getDeclarationKind()
                // Check if initializer is a function
                if (initializer && tsMorph.Node.isArrowFunction(initializer)) {
                    nodeName = `${node.getName()} (Arrow Function - ${declarationType})`
                    nodeType = 'Arrow Function'
                } else {
                    nodeName = `${node.getName()} (${declarationType})`
                    nodeType = getNodeTypeFromDeclarationType(declarationType)
                }
                return {
                    nodeObject: {
                        Name: nodeName,
                        Type: nodeType,
                        'File Path': node.getSourceFile().getFilePath()
                    },
                    id: getNodeId(node.getSourceFile(), nodeName)
                }
            }
        }
    }
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
* @returns {typedefs.classType} The node type
*/
function getNodeTypeFromDeclarationType(declarationType) {
    if (declarationType === 'const') {
        return 'Const'
    }
    if (declarationType === 'let') {
        return 'Let variable'
    }
    if (declarationType === 'var') {
        return 'Var variable'
    }
}

module.exports = {
    getNodeObject,
    getNodeId
};