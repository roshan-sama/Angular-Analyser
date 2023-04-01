//@ts-nocheck
import * as ts from 'typescript';
import * as fs from 'fs';
import { glob } from 'glob'

interface Component {
    name: string;
    selector: string;
    templateUrl: string;
    styleUrls: string[];
    providers: string[];
}

interface Service {
    name: string;
    providedIn: string;
}

export async function summarizeProject(projectPath: string): Promise<{ components: Component[], services: Service[] }> {
    const components: Component[] = [];
    const services: Service[] = [];

    let numberOfClasses = 0
    let numberOfFunctions = 0

    // Find all TypeScript files in the project
    let fileNames: string[] 
    // = ["ng-analysis/src/app/app.component.ts"]
    fileNames = await glob(`${projectPath}/**/*.ts`, { ignore: `${projectPath}/node_modules/**` })
    console.log(fileNames, "Files to review")

    // Build a program using the set of root file names in fileNames
    let program = ts.createProgram(fileNames, {
        target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS
    });

    // Get the checker, we will use it to find more about classes
    let checker = program.getTypeChecker();

    let decoratorFullText:string = ""
    let decoratorName:string = ""
    // Loop through each file and extract relevant information
    for (const fileName of fileNames) {
        const filePath = fileName;
        const sourceFile = ts.createSourceFile(filePath, fs.readFileSync(filePath).toString(), ts.ScriptTarget.ES2022, true);

        // Extract component metadata
        ts.forEachChild(sourceFile, node => {
            if (ts.isClassDeclaration(node) && ts.canHaveDecorators(node)) {
                
                const decorators = ts.getDecorators(node)

                const decorator = decorators.find(d => {
                    decoratorName = d.expression.expression.escapedText
                    return decoratorName === "Component"
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

summarizeProject("ng-analysis").then((output => {
    console.log("Components")
    output.components.forEach((component) => {
        console.log(component.name)
    })
    console.log("Services")
    output.services.forEach((service) => {
        console.log(service.name)
    })
}))
