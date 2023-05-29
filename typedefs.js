
/**
 * @typedef {Object} NodeObject
 * @property {string} Name - The name of the node.
 * @property {classType} Type - The type of the node.
 * @property {string} ['File Path'] - The file path of the node, if applicable.
 * @property {any} ['Non Filterable'] - Any additional information that should not be used for filtering.
 */

/**
 * @typedef {Object} RefObject
 * @property {"ref"} $type - The type of the reference.
 * @property {string[]} value - The value of the reference.
 */

//TODO: Add link type so that users know what type of reference occurred?
/**
 * @typedef {Object} LinkObject
 * @property {RefObject} Source - The source of the link.
 * @property {RefObject} Target - The target of the link.
 * @property {linkType} Type - The type of the node.
 */

/**
 * @typedef {Object} FalcorDependencyGraph
 * @property {Object.<string, NodeObject>} nodesById - Nodes by ID.
 * @property {RefObject[]} nodes - Array of node references.
 * @property {LinkObject[]} links - Array of link objects.
 */

/**
 * @typedef {Object} NodeObjectWithId
 * @property {NodeObject} nodeObject - The Node Object 
 * @property {string} id - The unique identifier associated with the node object
 */

/**
 * @typedef {Object} LinkObjectWithId
 * @property {LinkObject} nodeObject - The Node Object 
 * @property {string} id - The unique identifier associated with the node object
 */

/**
 * This function processes a SourceFile and returns an array of Nodes.
 * 
 * @callback processSourceFileCallback
 * @param {tsMorph.SourceFile} sourceFile - The source file to process.
 * @returns {tsMorph.Node[]} The array of nodes extracted from the source file.
 */

/**
 * @typedef {"Component" | "Service" | "Module"} classSubType
 * */


/** @typedef {Map<string, NodeObject>} NodesByIdMap */
/** @typedef {Map<string, NodeObject>} RawNodesByIdMap */


/**
 * @typedef {"Class" | "Function" | "Arrow Function" | "Source File" | "Angular Component" | "Angular Service" | "Angular Module" | "Const" | "Let variable" | "Var variable"} classType
 * */

/**
 * @typedef {"Reference" | "Angular Template Selector"} linkType
 * */
exports.unused = {};