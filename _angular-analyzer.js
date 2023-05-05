/**
 * @typedef NodeType1
 * @type {Object}
 * @property {string} id - an ID.
 * @property {string} name - node name.
 * @property {number} type - node type (Component, Service, Function, etc.).
 */

/**
 * @typedef NodeType2
 * @type {Object}
 * @property {string} id - an ID.
 * @property {string} name - node name.
 * @property {string} type - node type (Component, Service, Function, etc.).
 */
const getFunctionIdentifier = require("./get-function-identifier").getFunctionIdentifier;
const tsMorph = require("ts-morph");
const glob = require("glob");
const Table = require("cli-table");

const project = new tsMorph.Project();
let analysisSourceFile
let analysisClasses = []
let analysisFunctions = []
let analysisComponents = []
let analysisServices = []
let analysisDecorators = []

/** @type {NodeType[]} */
let analysisNodes = []
let analysisEdges = []

let analysisParameters = []
let analysisConstructor = []

let callExpressions = []
let functionNames = []

function analyzeFileLevel2(file) {
  analysisSourceFile = project.addSourceFileAtPath(file);
  analysisClasses = analysisSourceFile.getClasses();
  analysisFunctions = analysisSourceFile.getFunctions();
  analysisComponents = [];
  analysisServices = [];
  analysisDecorators = [];

  analysisNodes = [];
  analysisEdges = [];
  analysisParameters = []
  analysisConstructor = []

  let isComponent = false;
  let isService = false;

  analysisClasses.forEach((classObj) => {
    analysisComponents.push(...classObj.getDecorators().filter((decorator) => decorator.getName() === "Component"))
    analysisServices.push(...classObj.getDecorators().filter((decorator) => decorator.getName() === "Injectable"))
    // classObj.getMethods()[0].getChildren()

    analysisDecorators = classObj.getDecorators();
    isComponent = analysisDecorators.some((decorator) => decorator.getName() === "Component");
    isService = analysisDecorators.some((decorator) => decorator.getName() === "Injectable");

    callExpressions = classObj.getMethods().flatMap((method) => method.getDescendantsOfKind(tsMorph.SyntaxKind.CallExpression));
    functionNames = callExpressions.map((callexp) => getFunctionIdentifier(callexp))

    if (isComponent || isService) {
      const nodeName = classObj.getName();
      analysisNodes.push(nodeName);

      analysisConstructor = classObj.getConstructors()[0];
      if (constructor) {
        analysisParameters = analysisConstructor?.getParameters() ?? [];
        for (const parameter of analysisParameters) {
          const dependency = parameter.getType().getText();
          analysisEdges.push({ from: nodeName, to: dependency });
        }
      }
    }
  }
  );

  return {
    file,
    classes: analysisClasses.map(c => c.getName()),
    functions: [...functionNames],
    components: analysisComponents.map(c => c.getParent().getName()),
    services: analysisServices.map(s => s.getParent().getName()),
    nodes: analysisNodes,
    edges: analysisEdges
  };
}

const pattern = "ng-analysis/**/*.ts";
const files = glob.globSync(pattern, { ignore: ["ng-analysis/node_modules/**"] });

// Toggle the analysis level here
const analysisResults = files.map(analyzeFileLevel2);

const table = new Table({
  // head: ["File", "Classes", "Functions", "Components", "Services"]
  head: ["File", "Functions"]
});

for (const result of analysisResults) {
  // table.push([
  //   result.file,
  //   result.classes.join(", "),
  //   result.functions.join(", "),
  //   result.components.join(", "),
  //   result.services.join(", ")
  // ]);
  table.push([
    result.file,
    result.functions.join(", "),    
  ]);
}

console.log(table.toString());

//#region  Falcor Graph analysis
const allNodes = new Set();
const allEdges = [];

for (const result of analysisResults) {
  result.nodes.forEach((node) => allNodes.add(node));
  allEdges.push(...result.edges);
}

// Transform nodes and edges into a Falcor JSON Graph
const falcorGraph = {
  nodesById: {},
  links: []
};

// Add nodes to the JSON Graph
for (const node of allNodes) {
  falcorGraph.nodesById[node] = {
    name: node,
    dependencies: [],
  };
}

// Add a root reference list for nodes
falcorGraph.nodes = Array.from(allNodes).map((node) => ({
  $type: "ref",
  value: ["nodesById", node],
}));

// Add edges to the JSON Graph
for (const edge of allEdges) {
  const fromNode = falcorGraph.nodesById[edge.from];
  const toNodeRef = { $type: "ref", value: ["nodesById", edge.to] };

  if (fromNode) {
    fromNode.dependencies.push(toNodeRef);
    // TODO: Make source be a reference node to a reference, same for target.
    // In force graph, use the links function to reference these target nodes
    // We may also need an edges by Id key
    falcorGraph.links.push({ source: edge.from, target: edge.to })
  }
  const toNode = falcorGraph.nodesById[edge.to];

  // For package json dependencies
  if (!toNode) {
    falcorGraph.nodesById[edge.to] = {
      name: edge.to,
      dependencies: [],
    };
    falcorGraph.nodes.push({
      $type: "ref",
      value: ["nodesById", edge.to],
    })
  }
}



console.log(JSON.stringify(falcorGraph, null, 2));

//#endregion
