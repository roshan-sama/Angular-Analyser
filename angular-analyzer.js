const typedefs = require("./typedefs");
const tsMorph = require("ts-morph");
const glob = require("glob");
const fs = require("fs")
const path = require('path');
const getParentIdentifier = require("./get-parent-identifier");
const { getNodeObject } = require("./get-node-object");

const project = new tsMorph.Project({
    tsConfigFilePath: "ng-analysis/tsconfig.json",
});

const pattern = "ng-analysis/**/*.ts";
const typescriptFiles = glob.globSync(pattern, { ignore: ["ng-analysis/node_modules/**"] });

let analysisSourceFile
let analysisNode
let reference

let sourceFilename
let sourceNodeObject
let sourceId = ''

/** @type {typedefs.NodeObjectWithId} */
let parentIdentifier

/** @type {typedefs.FalcorDependencyGraph} */
let dependencyGraph = {
    nodesById: {},
    nodes: [],
    links: []
}

/** @type {typedefs.NodesByIdMap} */
const nodesByIdMap = new Map()

/** @type {typedefs.RawNodesByIdMap} */
const rawNodesByIdMap = new Map()

// Typescript file analysis
typescriptFiles.forEach((file) => {

    analysisSourceFile = project.getSourceFile(file)
    sourceFilename = analysisSourceFile.getFilePath()

    // TODO: Let users choose what types of items to analyse, and map appropriate
    // Sub types and other information as seen in getNodeType so taht CLasses can 
    // has components, service etc. subtypes based on decorators etc,
    // finalNodeTypes in getParentIdentifier also needs to make sure its stops searches if these nodes are found
    analyzeFileForNodes(analysisSourceFile, (sourceFile) => sourceFile.getClasses())
    analyzeFileForNodes(analysisSourceFile, (sourceFile) => sourceFile.getFunctions())
    analyzeFileForNodes(analysisSourceFile, (sourceFile) => sourceFile.getVariableDeclarations())

})

// Add nodes obtained to graph
nodesByIdMap.forEach((node, id) => {
    dependencyGraph.nodesById[id] = node

    dependencyGraph.nodes.push({
        $type: "ref",
        value: [
            "nodesById",
            id
        ]
    })
})

// Analyze links between Nodes
createReferenceLinksForNodes(rawNodesByIdMap, nodesByIdMap)

// Analyze links between Angular Components
/** @type {typedefs.NodesByIdMap} */
const angularComponentNodesByIdMap = new Map()
nodesByIdMap.forEach((node, id) => {
    if (node.Type === 'Angular Component') {
        angularComponentNodesByIdMap.set(id, node)
    }
})

createAngularComponentLinksForNodes(rawNodesByIdMap, angularComponentNodesByIdMap)

/**
 * Analyze a file for a type of Code element such as Class, Function etc.
 * @param {tsMorph.SourceFile} analysisSourceFile - The call expression to get the function identifier from.
 * @param {typedefs.processSourceFileCallback} getNodeElements - The call expression to get the function identifier from.
 * @returns {undefined} 
 */
function analyzeFileForNodes(analysisSourceFile, getNodeElements) {
    for (analysisNode of getNodeElements(analysisSourceFile)) {

        sourceNodeObject = getNodeObject(analysisNode)

        nodesByIdMap.set(sourceNodeObject.id, sourceNodeObject.nodeObject)
        rawNodesByIdMap.set(sourceNodeObject.id, analysisNode)
    }
}

/**
 * Analyze nodes for links between them
 * @param {typedefs.NodesByIdMap} nodesByIdMap - The call expression to get the function identifier from.
 * @param {typedefs.RawNodesByIdMap} rawNodesByIdMap
 * @returns {undefined}
 */
function createReferenceLinksForNodes(rawNodesByIdMap, nodesByIdMap) {
    rawNodesByIdMap.forEach((node, id) => {
        for (reference of node.findReferencesAsNodes()) {

            parentIdentifier = getParentIdentifier.getFinalParentNode(reference, nodesByIdMap)
            console.log("New Typescript Reference", id + " -> " + parentIdentifier.id)

            if (!dependencyGraph.nodesById[parentIdentifier.id]) {
                dependencyGraph.nodesById[parentIdentifier.id] = parentIdentifier.nodeObject

                dependencyGraph.nodes.push({
                    $type: "ref",
                    value: [
                        "nodesById",
                        parentIdentifier.id
                    ]
                })
            }

            dependencyGraph.links.push({
                source: {
                    $type: "ref",
                    "value": [
                        "nodesById",
                        id
                    ],
                },
                target: {
                    $type: "ref",
                    "value": [
                        "nodesById",
                        parentIdentifier.id
                    ],
                },
                Type: 'Reference'
            })
        }

    })
}

/**
 * Analyze nodes for links between them
 * @param {typedefs.NodesByIdMap} nodesByIdMap - The call expression to get the function identifier from.
 * @param {typedefs.RawNodesByIdMap} rawNodesByIdMap
 * @returns {undefined}
 */
function createAngularComponentLinksForNodes(rawNodesByIdMap, nodesByIdMap) {

    nodesByIdMap.forEach((sourceNode, sourceId) => {
        const templatePath = sourceNode["Non Filterable"]["filePathToTemplate"]
        const nodeSourceFilePath = sourceNode["File Path"]

        let nodeText = ""
        if (templatePath === nodeSourceFilePath) {
            nodeText = rawNodesByIdMap[sourceId].getText()
        }
        else {
            const absoluteTemplatePath = path.resolve(path.dirname(nodeSourceFilePath), templatePath)
            nodeText = fs.readFileSync(absoluteTemplatePath, 'utf8')
        }

        nodesByIdMap.forEach((targetNode, targetId) => {
            const elementSelector = targetNode["Non Filterable"]["selectorProperty"]
            const regexString = `<${elementSelector}(.*)?</${elementSelector}>`
            const regex = new RegExp(regexString, 'ms')

            const match = nodeText.match(regex)

            if(match){
                console.log("New Angular Template Selector Link", sourceId + " -> " + targetId)
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
                    },
                    Type: 'Angular Template Selector'
                })
            }
        })

})

}

const fileOutput = `import { falcorDependencyGraph } from "src/app/interfaces/falcor-dependency-graph";

export const analysisOutput: falcorDependencyGraph =
` + JSON.stringify(dependencyGraph, null, 2)
fs.writeFileSync("ng-analysis/src/utils/analysis-output.ts", fileOutput)

