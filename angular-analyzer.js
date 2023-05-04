const tsMorph = require("ts-morph");
const glob = require("glob");
const project = new tsMorph.Project();

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

let targetFilename
let targetSymbolName
let targetId

files.forEach((file) => {
    project.addSourceFileAtPath(file)
})

/** @type {OutputGraph1} */
let dependencyGraph = {
    nodesById: {},
    nodes: [],
    links: []
}

files.forEach((file) => {

    analysisSourceFile = project.addSourceFileAtPath(file)
    sourceFilename = analysisSourceFile.getFilePath()

    for (analysisClass of analysisSourceFile.getClasses()) {

        sourceSymbolName = analysisClass.getName()
        sourceId = getId(sourceFilename, sourceSymbolName)

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

        for (reference of analysisClass.findReferences()) {

            targetSymbolDefinition = reference.getDefinition()

            targetFilename = targetSymbolDefinition.getSourceFile().getFilePath()
            targetSymbolName = targetSymbolDefinition.getName()
            targetId = getId(targetFilename, targetSymbolName)

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

            if (!dependencyGraph.nodesById[targetId]) {
                dependencyGraph.nodesById[targetId] = {
                    name: targetSymbolName,
                    type: 'unknown'
                }
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

function getId(sourceFilename, nodeName) {
    ensureFileInMap(sourceFilename)
    return fileToIndexMap[sourceFilename] + ": " + nodeName
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
console.log("---")
console.log(fileToIndexMap)