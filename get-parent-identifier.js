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
 * @returns {typedefs.NodeObjectWithId} The identifier of the function, or undefined if not found.
 */
const getFinalParentNode = (node) => {
    highestValidNode = undefined
    return getFinalParentNodeRecursive(node)
}

const getFinalParentNodeRecursive = (node) => {
    parentNode = node.getParent();

    // If the parent node isn't part of one of the potential final nodes, keep searching
    // Highest node is source file, which is part of the final nodses list
    if (finalNodeTypes[parentNode.getKind()] === undefined) {
        return getFinalParentNodeRecursive(parentNode)
    }

    // If the parent node isn't source file, but one of the other final nodes, update
    // the highest valid node, and keep searching for a higher final node
    if (parentNode.getKind() !== tsMorph.SyntaxKind.SourceFile) {
        highestValidNode = parentNode
        return getFinalParentNodeRecursive(parentNode)
    }

    // If the parent is a source file, we've reached the end.
    // If we found a valid final parent node, return that. If not, return the source file
    if (highestValidNode !== undefined) {
        nodeToReturn = highestValidNode
    } else {
        nodeToReturn = parentNode
    }

    return getNodeObject(nodeToReturn)
}

module.exports = {
    getFinalParentNode,
    finalNodeTypes
};