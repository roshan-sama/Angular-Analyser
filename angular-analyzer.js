const tsMorph = require("ts-morph");
const glob = require("glob");
const project = new tsMorph.Project();

const pattern = "ng-analysis/**/*.ts";
const files = glob.globSync(pattern, { ignore: ["ng-analysis/node_modules/**"] });

let analysisSourceFile
let analysisClass

let referencedSymbols
let referencedSymbol
let reference

files.forEach((file) => {
    project.addSourceFileAtPath(file)
})

files.forEach((file) => {

    analysisSourceFile = project.addSourceFileAtPath(file)
    analysisClass = analysisSourceFile.getClasses()[0];

    if (!analysisClass) {
        return
    }
    referencedSymbols = analysisClass.findReferences();
    console.log("Class Analyzed: ", analysisClass.getName())
    for (referencedSymbol of referencedSymbols) {
        for (reference of referencedSymbol.getReferences()) {
            console.log("---------")
            console.log("REFERENCE")
            console.log("---------")
            console.log("File path: " + reference.getSourceFile().getFilePath());
            console.log("Start: " + reference.getTextSpan().getStart());
            console.log("Length: " + reference.getTextSpan().getLength());
            console.log("Parent kind: " + reference.getNode().getParentOrThrow().getKindName());
            console.log("\n");
        }
    }
})
