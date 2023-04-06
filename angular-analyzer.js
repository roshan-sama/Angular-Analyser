const tsMorph = require("ts-morph");
const glob = require("glob");
const Table = require("cli-table");

function analyzeFile(file) {
  const project = new tsMorph.Project();
  const sourceFile = project.addSourceFileAtPath(file);
  const classes = sourceFile.getClasses();
  const functions = sourceFile.getFunctions();
  const components = [];
  const services = [];

  const nodes = [];
  const edges = [];

  classes.forEach((classObj) => {
    components.push(...classObj.getDecorators().filter((decorator) => decorator.getName() === "Component"))
    services.push(...classObj.getDecorators().filter((decorator) => decorator.getName() === "Injectable"))
    
    const decorators = classObj.getDecorators();
    const isComponent = decorators.some((decorator) => decorator.getName() === "Component");
    const isService = decorators.some((decorator) => decorator.getName() === "Injectable");

    if (isComponent || isService) {
      const nodeName = classObj.getName();
      nodes.push(nodeName);

      const constructor = classObj.getConstructors()[0];
      if (constructor) {
        const parameters = constructor.getParameters();
        for (const parameter of parameters) {
          const dependency = parameter.getType().getText();
          edges.push({ from: nodeName, to: dependency });
        }
      }
    }
  }
  );

  return {
    file,
    classes: classes.map(c => c.getName()),
    functions: functions.map(f => f.getName()),
    components: components.map(c => c.getParent().getName()),
    services: services.map(s => s.getParent().getName()),
    nodes,
    edges
  };
}

const pattern = "ng-analysis/**/*.ts";
const files = glob.globSync(pattern, { ignore: ["ng-analysis/node_modules/**"] });

const analysisResults = files.map(analyzeFile);

const table = new Table({
  head: ["File", "Classes", "Functions", "Components", "Services"]
});

for (const result of analysisResults) {
  table.push([
    result.file,
    result.classes.join(", "),
    result.functions.join(", "),
    result.components.join(", "),
    result.services.join(", ")
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
    falcorGraph.links.push({source: edge.from, target: edge.to})
  }  
  const toNode = falcorGraph.nodesById[edge.to];

  // For package json dependencies
  if(!toNode){
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