const tsMorph = require("ts-morph");
const typedefs = require("./typedefs");
const getNodeObject = require("./get-node-object").getNodeObject;

const finalNodeTypes = {
    [tsMorph.SyntaxKind.ClassDeclaration]: 260,
    [tsMorph.SyntaxKind.FunctionDeclaration]: 259,
    [tsMorph.SyntaxKind.SourceFile]: 308
}
let parentNode

/**
 * Gets the identifier of the function called in a call expression.
 * @param {tsMorph.Node} node - The call expression to get the function identifier from.
 * @returns {typedefs.NodeObjectWithId} The identifier of the function, or undefined if not found.
 */
const getFinalParentNode = (node) => {
    parentNode = node.getParent();
    if (finalNodeTypes[parentNode.getKind()] !== undefined) {
        return getNodeObject(parentNode)
    } else {
        return getFinalParentNode(parentNode)
    }
}

module.exports = {
    getFinalParentNode,
    finalNodeTypes
};