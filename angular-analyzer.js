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
let analysisNode
let reference

let sourceFilename
let sourceNodeObject
let sourceId = ''

let parentIdentifier

/** @type {typedefs.FalcorDependencyGraph} */
let dependencyGraph = {
    nodesById: {},
    nodes: [],
    links: []
}

files.forEach((file) => {

    analysisSourceFile = project.getSourceFile(file)
    sourceFilename = analysisSourceFile.getFilePath()

    // TODO: Let users choose what types of items to analyse, and map appropriate
    // Sub types and other information as seen in getNodeType so taht CLasses can 
    // has components, service etc. subtypes based on decorators etc,
    // finalNodeTypes in getParentIdentifier also needs to make sure its stops searches if these nodes are found
    analyzeFile(analysisSourceFile, (sourceFile) => sourceFile.getClasses())
    analyzeFile(analysisSourceFile, (sourceFile) => sourceFile.getFunctions())
    analyzeFile(analysisSourceFile, (sourceFile) => sourceFile.getVariableDeclarations())
})

/**
 * Analyze a file for a type of Code element such as Class, Function etc.
 * @param {tsMorph.SourceFile} analysisSourceFile - The call expression to get the function identifier from.
 * @param {typedefs.processSourceFileCallback} getNodeElements - The call expression to get the function identifier from.
 * @returns {undefined} 
 */
function analyzeFile(analysisSourceFile, getNodeElements) {
    for (analysisNode of getNodeElements(analysisSourceFile)) {

        sourceNodeObject = getNodeObject(analysisNode)
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

        for (reference of analysisNode.findReferencesAsNodes()) {

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
}

const fileOutput = `import { falcorDependencyGraph } from "src/app/interfaces/falcor-dependency-graph";

export const analysisOutput: falcorDependencyGraph =
` + JSON.stringify(dependencyGraph, null, 2)
fs.writeFileSync("ng-analysis/src/utils/analysis-output.ts", fileOutput)

