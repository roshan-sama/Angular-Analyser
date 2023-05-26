
const tsMorph = require("ts-morph");
const typedefs = require("./typedefs");

/** @type {typedefs.classSubType} */
let classKind
/** @type {typedefs.classType} */
let nodeType
let declarationType

let nodeName = ''
let initializer = ''

let serviceDecorator;
let issuesList = []

const syntaxKindToLinkObjectMap = {

}

let handler
let nodeToReturn
/**
 * Takes in a ts-morph node and generates the Node Object based on the node's SyntaxKind
 * @param {tsMorph.Node} referencedNode - The node being referenced
 * @param {tsMorph.Node} referencingParentNode - The final parent node within which the reference to the above node occurs.
 * @param {tsMorph.Identifier} referenceIdentifier - The identifier associated of the 
 * @returns {typedefs.Link} The Node Object representing this node
 */
const getLinkObject = (referencedNode, referencingParentNode, referenceIdentifier) => {
    handler = linkTypeToLinkObjectMap[];
    if (handler) {
        linkToReturn = handler(node)
        return linkToReturn;
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