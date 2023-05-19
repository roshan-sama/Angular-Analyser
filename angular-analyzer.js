const typedefs = require("./typedefs");
const tsMorph = require("ts-morph");
const glob = require("glob");
const fs = require("fs")
const getParentIdentifier = require("./get-parent-identifier");
const { getNodeObject } = require("./get-node-object");
const project = new tsMorph.Project({
    tsConfigFilePath: "ng-analysis/tsconfig.json",
});

const pattern = "ng-analysis/**/*.ts";
const files = glob.globSync(pattern, { ignore: ["ng-analysis/node_modules/**"] });

let analysisSourceFile
let analysisClass
let analysisFunction

let symbolsThatReferenceEntity
let symbolsReferencing
let reference

let sourceFilename = ''
let sourceNodeObject
let sourceId = ''

let targetSymbolDefinitions = []
let targetSymbolDefinition
let parentIdentifier

let targetFile
let targetSymbolName
let targetId

/** @type {typedefs.FalcorDependencyGraph} */
let dependencyGraph = {
    nodesById: {},
    nodes: [],
    links: []
}

files.forEach((file) => {

    analysisSourceFile = project.getSourceFile(file)
    sourceFilename = analysisSourceFile.getFilePath()

    // TODO: Analysis classes and analysis function for loops 
    // are similar. Parametrize and convert to function, then call
    // function instead of duplicating this code
    for (analysisClass of analysisSourceFile.getClasses()) {

        sourceNodeObject = getNodeObject(analysisClass)
        sourceId = sourceNodeObject.id

        if (!dependencyGraph.nodesById[sourceId]) {
            dependencyGraph.nodesById[sourceId] = sourceNodeObject.nodeObject

            dependencyGraph.nodes.push({
                $type: "ref",
                value: [
                    "nodesById",
                    sourceId
                ]
            })
        }

        for (reference of analysisClass.findReferencesAsNodes()) {

            parentIdentifier = getParentIdentifier.getFinalParentNode(reference)
            console.log("New Link", sourceId + " -> " + parentIdentifier.id)
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
                        sourceId
                    ],
                },
                target: {
                    $type: "ref",
                    "value": [
                        "nodesById",
                        parentIdentifier.id
                    ],
                }
            })
        }
    }

    for (analysisFunction of analysisSourceFile.getFunctions()) {

        sourceNodeObject = getNodeObject(analysisFunction)
        sourceId = sourceNodeObject.id

        if (!dependencyGraph.nodesById[sourceId]) {
            dependencyGraph.nodesById[sourceId] = sourceNodeObject.nodeObject

            dependencyGraph.nodes.push({
                $type: "ref",
                value: [
                    "nodesById",
                    sourceId
                ]
            })
        }

        for (reference of analysisFunction.findReferencesAsNodes()) {

            parentIdentifier = getParentIdentifier.getFinalParentNode(reference)
            console.log("New Link", sourceId + " -> " + parentIdentifier.id)
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
                        sourceId
                    ],
                },
                target: {
                    $type: "ref",
                    "value": [
                        "nodesById",
                        parentIdentifier.id
                    ],
                }
            })
        }

    }
    //TODO: for (variableStatements of analysisSourceFile.getVariableStatements())
})



const fileOutput = `import { falcorDependencyGraph } from "src/app/interfaces/falcor-dependency-graph";

export const analysisOutput: falcorDependencyGraph =
` + JSON.stringify(dependencyGraph, null, 2)
fs.writeFileSync("ng-analysis/src/utils/analysis-output.ts", fileOutput)

