const tsMorph = require("ts-morph");

/**
 * Gets the identifier of the function called in a call expression.
 * @param {ts.CallExpression} callExpression - The call expression to get the function identifier from.
 * @returns {string|undefined} The identifier of the function, or undefined if not found.
 */
const getParentIdentifier = (callExpression) => {
    const parent = callExpression.getParent();
    console.log(parent.getKind(), parent.getKind())
    if (parent.getKind() === tsMorph.SyntaxKind.ExpressionStatement) {
        return callExpression.getExpression().getText();
    } else {
        return undefined;
    }
}

module.exports = {
    getParentIdentifier
};