
const tsMorph = require("ts-morph");

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
                    name: node.getBaseName(),
                    type: 'sourceFile',
                    filePath: node.getFilePath()
                },
                id: getNodeId(node.getSourceFile(), node.getBaseName())
            }
        }
        case tsMorph.SyntaxKind.FunctionDeclaration: {
            const name = `${node.getName()} (Function)`
            return {
                nodeObject: {
                    name: node.getName(),
                    type: 'function',
                    filePath: node.getSourceFile().getFilePath()
                },
                id: getNodeId(node.getSourceFile(), name)
            }
        }
        case tsMorph.SyntaxKind.ClassDeclaration: {
            const name = `${node.getName()} (Class)`
            return {
                nodeObject: {
                    name: node.getName(),
                    type: 'class',
                    filePath: node.getSourceFile().getFilePath()
                },
                id: getNodeId(node.getSourceFile(), name)
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

module.exports = {
    getNodeObject,
    getNodeId
};