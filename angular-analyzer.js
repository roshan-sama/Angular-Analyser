const tsMorph = require("ts-morph");
const glob = require("glob");
const project = new tsMorph.Project({
    tsConfigFilePath: "ng-analysis/tsconfig.json",
});

const pattern = "ng-analysis/**/*.ts";
const files = glob.globSync(pattern, { ignore: ["ng-analysis/node_modules/**"] });

let analysisSourceFile
let analysisClass

let symbolsThatReferenceEntity
let symbolsReferencing
let reference

let fileCount = 0
let fileToIndexMap = {}

let sourceFilename = ''
let sourceSymbolName = ''
let sourceId = ''

let targetSymbolDefinitions = []
let targetSymbolDefinition
let parentIdentifier

let targetFile
let targetSymbolName
let targetId

/** @type {OutputGraph1} */
let dependencyGraph = {
    nodesById: {},
    nodes: [],
    links: []
}

files.forEach((file) => {

    analysisSourceFile = project.getSourceFile(file)
    sourceFilename = analysisSourceFile.getFilePath()

    for (analysisClass of analysisSourceFile.getClasses()) {

        sourceSymbolName = analysisClass.getName()
        sourceId = getId(analysisSourceFile, sourceSymbolName)

        if (!dependencyGraph.nodesById[sourceId]) {
            dependencyGraph.nodesById[sourceId] = {
                name: sourceSymbolName,
                type: 'class'
            }

            dependencyGraph.nodes.push({
                $type: "ref",
                value: [
                    "nodesById",
                    sourceId
                ]
            })
        }

        for (reference of analysisClass.findReferencesAsNodes()) {

            targetFile = reference.getSourceFile()
            targetSymbolName = targetFile.getBaseNameWithoutExtension()
            targetId = getId(targetFile)

            dependencyGraph.links.push({
                source: {
                    $type: "ref",
                    "value": [
                        "nodesById",
                        sourceId
                    ],
                },
                target: {
                    $type: "ref",
                    "value": [
                        "nodesById",
                        targetId
                    ],
                }
            })

            console.log("New Link", sourceId + " -> " + targetId)
            if (!dependencyGraph.nodesById[targetId]) {
                dependencyGraph.nodesById[targetId] = {
                    name: targetSymbolName,
                    type: 'unknown'
                }
                dependencyGraph.nodes.push({
                    $type: "ref",
                    value: [
                        "nodesById",
                        targetId
                    ]
                })
            }
        }
    }
})

function ensureFileInMap(sourceFilename) {
    if (!fileToIndexMap[sourceFilename]) {
        fileToIndexMap[sourceFilename] = fileCount
        fileCount = fileCount + 1
    }
}

function getId(analysisSourceFile, nodeName) {
    ensureFileInMap(analysisSourceFile.getFilePath())
    return fileToIndexMap[analysisSourceFile.getFilePath()] + ": " + analysisSourceFile.getBaseNameWithoutExtension()
}

function findParentIdentifier(node) {
    let currentNode = node;

    while (currentNode) {
        const parentNode = currentNode.getParent();
        if (parentNode && tsMorph.Node.isIdentifier(parentNode)) {
            return parentNode;
        }
        currentNode = parentNode;
    }

    return null;
}
/**
 * @typedef {Object} DependencyRef
 * @property {"ref"} $type
 * @property {string[]} value
 */

/**
 * @typedef {Object} Node
 * @property {string} name
 * @property {"class" | "function"} type
 * @property {DependencyRef[]} dependencies
 */

/**
 * @typedef {Object} Link
 * @property {string} source
 * @property {string} target
 */

/**
 * @typedef {Object} OutputGraph1
 * @property {Object<string, Node>} nodesById
 * @property {Link[]} links
 * @property {DependencyRef[]} nodes
 */

console.log(JSON.stringify(dependencyGraph, null, 2))