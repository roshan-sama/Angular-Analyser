const tsMorph = require("ts-morph");
const getParentIdentifier = require("./get-parent-identifier").getParentIdentifier;

/**
 * Gets the identifier of the function called in a call expression.
 * @param {ts.CallExpression} callExpression - The call expression to get the function identifier from.
 * @returns {string|undefined} The identifier of the function, or undefined if not found.
 */
const getFunctionIdentifier = (callExpression) => {
    const calledFunction = callExpression.getExpression();
    let functionName;
    if (calledFunction.getKind() === tsMorph.SyntaxKind.Identifier) {
        functionName = calledFunction.getText();
    } else if (calledFunction.getKind() === tsMorph.SyntaxKind.PropertyAccessExpression) {
        functionName = calledFunction.getName();
    } else {
        functionName = undefined;
    }
    let propertyAccessName = getParentIdentifier(callExpression)
    return propertyAccessName ? propertyAccessName + '...' + functionName : functionName;
};

module.exports = {
    getFunctionIdentifier
};