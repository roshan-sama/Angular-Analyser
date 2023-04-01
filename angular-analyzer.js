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

  classes.forEach((classObj) => {
    components.push(...classObj.getDecorators().filter((decorator) => decorator.getName() === "Component"))
    services.push(...classObj.getDecorators().filter((decorator) => decorator.getName() === "Injectable"))
  }
  );

  return {
    file,
    classes: classes.map(c => c.getName()),
    functions: functions.map(f => f.getName()),
    components: components.map(c => c.getParent().getName()),
    services: services.map(s => s.getParent().getName())
  };
}

const pattern = "ng-analysis/**/*.ts";
const files = glob.globSync(pattern, { ignore: ["node_modules/**"] });

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
