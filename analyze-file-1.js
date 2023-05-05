
function analyzeFile(file) {
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

    analysisClasses.forEach((classObj) => {
        analysisComponents.push(...classObj.getDecorators().filter((decorator) => decorator.getName() === "Component"))
        analysisServices.push(...classObj.getDecorators().filter((decorator) => decorator.getName() === "Injectable"))
        // classObj.getMethods()[0].getChildren()

        analysisDecorators = classObj.getDecorators();
        const isComponent = analysisDecorators.some((decorator) => decorator.getName() === "Component");
        const isService = analysisDecorators.some((decorator) => decorator.getName() === "Injectable");

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
        functions: analysisFunctions.map(f => f.getName()),
        components: analysisComponents.map(c => c.getParent().getName()),
        services: analysisServices.map(s => s.getParent().getName()),
        nodes: analysisNodes,
        edges: analysisEdges
    };
}
