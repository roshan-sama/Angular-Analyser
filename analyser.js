"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizeProject = void 0;
const tslib_1 = require("tslib");
//@ts-nocheck
const ts = tslib_1.__importStar(require("typescript"));
const fs = tslib_1.__importStar(require("fs"));
const glob_1 = require("glob");
async function summarizeProject(projectPath) {
    const components = [];
    const services = [];
    let numberOfClasses = 0;
    let numberOfFunctions = 0;
    // Find all TypeScript files in the project
    let fileNames;
    // = ["ng-analysis/src/app/app.component.ts"]
    fileNames = await (0, glob_1.glob)(`${projectPath}/**/*.ts`, { ignore: `${projectPath}/node_modules/**` });
    console.log(fileNames, "Files to review");
    // Build a program using the set of root file names in fileNames
    let program = ts.createProgram(fileNames, {
        target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS
    });
    // Get the checker, we will use it to find more about classes
    let checker = program.getTypeChecker();
    let decoratorFullText = "";
    let decoratorName = "";
    // Loop through each file and extract relevant information
    for (const fileName of fileNames) {
        const filePath = fileName;
        const sourceFile = ts.createSourceFile(filePath, fs.readFileSync(filePath).toString(), ts.ScriptTarget.ES2022, true);
        // Extract component metadata
        ts.forEachChild(sourceFile, node => {
            if (ts.isClassDeclaration(node) && ts.canHaveDecorators(node)) {
                const decorators = ts.getDecorators(node);
                const decorator = decorators.find(d => {
                    decoratorName = d.expression.expression.escapedText;
                    return decoratorName === "Component";
                });
                if (decorator) {
                    ;
                    components.push({
                        name: decorator.parent.name.escapedText,
                        // selector: metadata?.selector?.text || '',
                        // templateUrl: metadata?.template?.fileName || '',
                        // styleUrls: metadata?.styleUrls?.map(url => url.text) || [],
                        // providers: metadata?.providers?.map(provider => provider.expression.getText()) || [],
                    });
                }
            }
        });
        // Extract service metadata
        // ts.forEachChild(sourceFile, node => {
        //     if (ts.isClassDeclaration(node) && node.decorators) {
        //         const decorator = node.decorators.find(d => d.expression.getText() === 'Injectable');
        //         if (decorator) {
        //             const metadata = ts.createCompilerHost({}).getMetadataForDecorators([decorator], sourceFile).pop();
        //             services.push({
        //                 name: node.name.getText(),
        //                 providedIn: metadata?.providedIn?.getText() || 'root',
        //             });
        //         }
        //     }
        // });
    }
    return { components, services };
}
exports.summarizeProject = summarizeProject;
summarizeProject("ng-analysis").then((output => {
    console.log("Components");
    output.components.forEach((component) => {
        console.log(component.name);
    });
    console.log("Services");
    output.services.forEach((service) => {
        console.log(service.name);
    });
}));
//# sourceMappingURL=analyser.js.map