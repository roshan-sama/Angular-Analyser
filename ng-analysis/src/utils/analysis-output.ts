import { falcorDependencyGraph } from "src/app/interfaces/falcor-dependency-graph";

export const analysisOutput: falcorDependencyGraph =
{
  "nodesById": {
    "0: tree-graph - createTreeGraphSvg (Arrow Function - const)": {
      "Name": "createTreeGraphSvg (Arrow Function - const)",
      "Type": "Arrow Function",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/utils/tree-graph.ts",
      "Non Filterable": {}
    },
    "1: force-graph - ForceGraph (Function)": {
      "Name": "ForceGraph (Function)",
      "Type": "Function",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/utils/force-graph.ts",
      "Non Filterable": {}
    },
    "2: analysis-output - analysisOutput (const)": {
      "Name": "analysisOutput (const)",
      "Type": "Const",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/utils/analysis-output.ts",
      "Non Filterable": {}
    },
    "3: non-root-service-example - NonRootServiceExample (Service)": {
      "Name": "NonRootServiceExample (Service)",
      "Type": "Angular Service",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/services/non-root-service-example.ts",
      "Non Filterable": {}
    },
    "4: invalid-injectable-service - InvalidInjectableService (Service)": {
      "Name": "InvalidInjectableService (Service)",
      "Type": "Angular Service",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/services/invalid-injectable-service.ts",
      "Non Filterable": {},
      "Service DI Error": "InvalidInjectableService: Angular Service Injector is not provided in root: @Injectable({\n  providedIn: 'any'\n})"
    },
    "5: hero.service - HeroService (Service)": {
      "Name": "HeroService (Service)",
      "Type": "Angular Service",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/services/hero.service.ts",
      "Non Filterable": {}
    },
    "6: app.module - AppModule (Module)": {
      "Name": "AppModule (Module)",
      "Type": "Angular Module",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.module.ts",
      "Non Filterable": {}
    },
    "7: app.component - AppComponent (Component)": {
      "Name": "AppComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.ts",
      "Non Filterable": {
        "selectorProperty": "app-root",
        "filePathToTemplate": "./app.component.html"
      },
      "Service DI Warning": "AppComponent: Review Angular Service Injector for injected services"
    },
    "7: app.component - valueitem (Arrow Function - const)": {
      "Name": "valueitem (Arrow Function - const)",
      "Type": "Arrow Function",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.ts",
      "Non Filterable": {}
    },
    "7: app.component - testVariable1 (var)": {
      "Name": "testVariable1 (var)",
      "Type": "Var variable",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.ts",
      "Non Filterable": {}
    },
    "7: app.component - referencerLetVariable (let)": {
      "Name": "referencerLetVariable (let)",
      "Type": "Let variable",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.ts",
      "Non Filterable": {}
    },
    "8: app-routing.module - AppRoutingModule (Module)": {
      "Name": "AppRoutingModule (Module)",
      "Type": "Angular Module",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app-routing.module.ts",
      "Non Filterable": {}
    },
    "8: app-routing.module - routes (const)": {
      "Name": "routes (const)",
      "Type": "Const",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app-routing.module.ts",
      "Non Filterable": {}
    },
    "9: rjm-test-component.component - RjmTestComponentComponent (Component)": {
      "Name": "RjmTestComponentComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/rjm-test-component/rjm-test-component.component.ts",
      "Non Filterable": {
        "selectorProperty": "app-rjm-test-component",
        "filePathToTemplate": "./rjm-test-component.component.html"
      }
    },
    "10: node-filter-presentation.component - NodeFilterPresentationComponent (Component)": {
      "Name": "NodeFilterPresentationComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-filter-presentation/node-filter-presentation.component.ts",
      "Non Filterable": {
        "selectorProperty": "node-filter-presentation",
        "filePathToTemplate": "./node-filter-presentation.component.html"
      }
    },
    "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)": {
      "Name": "NodeDetailsPresentationComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-details-presentation/node-details-presentation.component.ts",
      "Non Filterable": {
        "selectorProperty": "node-details-presentation",
        "filePathToTemplate": "./node-details-presentation.component.html"
      }
    },
    "12: link-filter-presentation.component - LinkFilterPresentationComponent (Component)": {
      "Name": "LinkFilterPresentationComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/link-filter-presentation/link-filter-presentation.component.ts",
      "Non Filterable": {
        "selectorProperty": "link-filter-presentation",
        "filePathToTemplate": "./link-filter-presentation.component.html"
      }
    },
    "13: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)": {
      "Name": "GraphDisplaySmartComponentComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/components/graph-display-smart-component/graph-display-smart-component.component.ts",
      "Non Filterable": {
        "selectorProperty": "app-graph-display-smart-component",
        "filePathToTemplate": "./graph-display-smart-component.component.html"
      }
    },
    "11: node-details-presentation.component - node-details-presentation.component.ts": {
      "Name": "node-details-presentation.component.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-details-presentation/node-details-presentation.component.ts",
      "Non Filterable": {}
    },
    "7: app.component - app.component.ts": {
      "Name": "app.component.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.ts",
      "Non Filterable": {}
    },
    "10: node-filter-presentation.component - node-filter-presentation.component.ts": {
      "Name": "node-filter-presentation.component.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-filter-presentation/node-filter-presentation.component.ts",
      "Non Filterable": {}
    },
    "12: link-filter-presentation.component - link-filter-presentation.component.ts": {
      "Name": "link-filter-presentation.component.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/link-filter-presentation/link-filter-presentation.component.ts",
      "Non Filterable": {}
    },
    "14: hero.service.spec - hero.service.spec.ts": {
      "Name": "hero.service.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/services/hero.service.spec.ts",
      "Non Filterable": {}
    },
    "15: main - main.ts": {
      "Name": "main.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/main.ts",
      "Non Filterable": {}
    },
    "6: app.module - app.module.ts": {
      "Name": "app.module.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.module.ts",
      "Non Filterable": {}
    },
    "16: app.component.spec - app.component.spec.ts": {
      "Name": "app.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.spec.ts",
      "Non Filterable": {}
    },
    "17: rjm-test-component.component.spec - rjm-test-component.component.spec.ts": {
      "Name": "rjm-test-component.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/rjm-test-component/rjm-test-component.component.spec.ts",
      "Non Filterable": {}
    },
    "18: node-filter-presentation.component.spec - node-filter-presentation.component.spec.ts": {
      "Name": "node-filter-presentation.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-filter-presentation/node-filter-presentation.component.spec.ts",
      "Non Filterable": {}
    },
    "19: node-details-presentation.component.spec - node-details-presentation.component.spec.ts": {
      "Name": "node-details-presentation.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-details-presentation/node-details-presentation.component.spec.ts",
      "Non Filterable": {}
    },
    "20: link-filter-presentation.component.spec - link-filter-presentation.component.spec.ts": {
      "Name": "link-filter-presentation.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/link-filter-presentation/link-filter-presentation.component.spec.ts",
      "Non Filterable": {}
    },
    "21: graph-display-smart-component.component.spec - graph-display-smart-component.component.spec.ts": {
      "Name": "graph-display-smart-component.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/components/graph-display-smart-component/graph-display-smart-component.component.spec.ts",
      "Non Filterable": {}
    }
  },
  "nodes": [
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "0: tree-graph - createTreeGraphSvg (Arrow Function - const)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "1: force-graph - ForceGraph (Function)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "2: analysis-output - analysisOutput (const)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "3: non-root-service-example - NonRootServiceExample (Service)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "4: invalid-injectable-service - InvalidInjectableService (Service)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "5: hero.service - HeroService (Service)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "6: app.module - AppModule (Module)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "7: app.component - AppComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "7: app.component - valueitem (Arrow Function - const)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "7: app.component - testVariable1 (var)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "7: app.component - referencerLetVariable (let)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "8: app-routing.module - AppRoutingModule (Module)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "8: app-routing.module - routes (const)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "9: rjm-test-component.component - RjmTestComponentComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "10: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "12: link-filter-presentation.component - LinkFilterPresentationComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "13: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "11: node-details-presentation.component - node-details-presentation.component.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "7: app.component - app.component.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "10: node-filter-presentation.component - node-filter-presentation.component.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "12: link-filter-presentation.component - link-filter-presentation.component.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "14: hero.service.spec - hero.service.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "15: main - main.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "6: app.module - app.module.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "16: app.component.spec - app.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "17: rjm-test-component.component.spec - rjm-test-component.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "18: node-filter-presentation.component.spec - node-filter-presentation.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "19: node-details-presentation.component.spec - node-details-presentation.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "20: link-filter-presentation.component.spec - link-filter-presentation.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "21: graph-display-smart-component.component.spec - graph-display-smart-component.component.spec.ts"
      ]
    }
  ],
  "links": [
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "0: tree-graph - createTreeGraphSvg (Arrow Function - const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "11: node-details-presentation.component - node-details-presentation.component.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "0: tree-graph - createTreeGraphSvg (Arrow Function - const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: force-graph - ForceGraph (Function)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - app.component.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: force-graph - ForceGraph (Function)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - app.component.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "10: node-filter-presentation.component - node-filter-presentation.component.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: analysis-output - analysisOutput (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "12: link-filter-presentation.component - link-filter-presentation.component.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "5: hero.service - HeroService (Service)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - app.component.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "5: hero.service - HeroService (Service)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "5: hero.service - HeroService (Service)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "5: hero.service - HeroService (Service)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "14: hero.service.spec - hero.service.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "5: hero.service - HeroService (Service)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "14: hero.service.spec - hero.service.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "5: hero.service - HeroService (Service)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "14: hero.service.spec - hero.service.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - AppModule (Module)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "15: main - main.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - AppModule (Module)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "15: main - main.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - app.module.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - AppModule (Module)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - AppModule (Module)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "16: app.component.spec - app.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "16: app.component.spec - app.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "16: app.component.spec - app.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "16: app.component.spec - app.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "16: app.component.spec - app.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - testVariable1 (var)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - referencerLetVariable (let)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: app-routing.module - AppRoutingModule (Module)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - app.module.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: app-routing.module - AppRoutingModule (Module)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - AppModule (Module)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: app-routing.module - routes (const)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: app-routing.module - AppRoutingModule (Module)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component - RjmTestComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - app.module.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component - RjmTestComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - AppModule (Module)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component - RjmTestComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "17: rjm-test-component.component.spec - rjm-test-component.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component - RjmTestComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "17: rjm-test-component.component.spec - rjm-test-component.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component - RjmTestComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "17: rjm-test-component.component.spec - rjm-test-component.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component - RjmTestComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "17: rjm-test-component.component.spec - rjm-test-component.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component - RjmTestComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "17: rjm-test-component.component.spec - rjm-test-component.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "10: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - app.module.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "10: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - AppModule (Module)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "10: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "18: node-filter-presentation.component.spec - node-filter-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "10: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "18: node-filter-presentation.component.spec - node-filter-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "10: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "18: node-filter-presentation.component.spec - node-filter-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "10: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "18: node-filter-presentation.component.spec - node-filter-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "10: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "18: node-filter-presentation.component.spec - node-filter-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - app.module.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - AppModule (Module)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "19: node-details-presentation.component.spec - node-details-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "19: node-details-presentation.component.spec - node-details-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "19: node-details-presentation.component.spec - node-details-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "19: node-details-presentation.component.spec - node-details-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "19: node-details-presentation.component.spec - node-details-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "12: link-filter-presentation.component - LinkFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - app.module.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "12: link-filter-presentation.component - LinkFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - AppModule (Module)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "12: link-filter-presentation.component - LinkFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "20: link-filter-presentation.component.spec - link-filter-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "12: link-filter-presentation.component - LinkFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "20: link-filter-presentation.component.spec - link-filter-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "12: link-filter-presentation.component - LinkFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "20: link-filter-presentation.component.spec - link-filter-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "12: link-filter-presentation.component - LinkFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "20: link-filter-presentation.component.spec - link-filter-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "12: link-filter-presentation.component - LinkFilterPresentationComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "20: link-filter-presentation.component.spec - link-filter-presentation.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "13: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - app.module.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "13: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.module - AppModule (Module)"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "13: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "21: graph-display-smart-component.component.spec - graph-display-smart-component.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "13: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "21: graph-display-smart-component.component.spec - graph-display-smart-component.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "13: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "21: graph-display-smart-component.component.spec - graph-display-smart-component.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "13: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "21: graph-display-smart-component.component.spec - graph-display-smart-component.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "13: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "21: graph-display-smart-component.component.spec - graph-display-smart-component.component.spec.ts"
        ]
      },
      "Type": "Reference"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "10: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
        ]
      },
      "Type": "Angular Template Selector"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "11: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
        ]
      },
      "Type": "Angular Template Selector"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "12: link-filter-presentation.component - LinkFilterPresentationComponent (Component)"
        ]
      },
      "Type": "Angular Template Selector"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "5: hero.service - HeroService (Service)"
        ]
      },
      "Type": "Dependency Injected Service"
    }
  ]
}