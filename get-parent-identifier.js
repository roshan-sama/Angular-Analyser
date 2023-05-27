const tsMorph = require("ts-morph");
const typedefs = require("./typedefs");
const getNodeObject = require("./get-node-object").getNodeObject;

const finalNodeTypes = {
    [tsMorph.SyntaxKind.ClassDeclaration]: 260,
    [tsMorph.SyntaxKind.FunctionDeclaration]: 259,
    [tsMorph.SyntaxKind.SourceFile]: 308,
    [tsMorph.SyntaxKind.VariableDeclaration]: 257,
}

let parentNode
let highestValidNode = undefined
let nodeToReturn

/**
 * Gets the identifier of the function called in a call expression.
 * @param {tsMorph.Node} node - The call expression to get the function identifier from.
 * @param {typedefs.NodesByIdMap} nodesByIdMap - The map of nodes indexed by string id
 * @returns {typedefs.NodeObjectWithId} The identifier of the function, or undefined if not found.
 */
const getFinalParentNode = (node, nodesByIdMap) => {
    highestValidNode = undefined
    return getFinalParentNodeRecursive(node, nodesByIdMap)
}

/**
 * Recursively traverses up the AST to get the final valid parent node referencing the start node
 * @param {tsMorph.Node} node - The call expression to get the function identifier from.
 * @param {typedefs.NodesByIdMap} nodesByIdMap - The map of nodes indexed by string id
 * @returns {typedefs.NodeObjectWithId} The identifier of the function, or undefined if not found.
 */
const getFinalParentNodeRecursive = (node, nodesByIdMap) => {
    parentNode = node.getParent();

    // If the parent node isn't part of one of the potential final nodes, keep searching
    // Highest node is source file, which is part of the final nodes list
    if (finalNodeTypes[parentNode.getKind()] === undefined) {
        return getFinalParentNodeRecursive(parentNode, nodesByIdMap)
    }

    // If the parent node isn't source file, but one of the other final nodes, update
    // the highest valid node, and keep searching for a higher final node
    if (parentNode.getKind() !== tsMorph.SyntaxKind.SourceFile) {
        highestValidNode = parentNode
        return getFinalParentNodeRecursive(parentNode, nodesByIdMap)
    }

    // If the parent is a source file, we've reached the end.

    // If we found a valid final parent node and the highest parent node doesn't exist
    // return that. If not, return the source file
    const parentNodeObject = getNodeObject(parentNode)
    if (highestValidNode === undefined) {
        return parentNodeObject
    }

    const highestNodeObject = getNodeObject(highestValidNode)
    if(nodesByIdMap.has(highestNodeObject.id)){
        return highestNodeObject
    }
    
    return parentNodeObject
}

module.exports = {
    getFinalParentNode,
    finalNodeTypes
};