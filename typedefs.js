
/**
 * @typedef {Object} NodeObject
 * @property {string} name - The name of the node.
 * @property {"class" | "function" | "sourceFile"} type - The type of the node.
 * @property {string} [filePath] - The file path of the node, if applicable.
 */

/**
 * @typedef {Object} RefObject
 * @property {"ref"} $type - The type of the reference.
 * @property {string[]} value - The value of the reference.
 */

/**
 * @typedef {Object} LinkObject
 * @property {RefObject} source - The source of the link.
 * @property {RefObject} target - The target of the link.
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
exports.unused = {};