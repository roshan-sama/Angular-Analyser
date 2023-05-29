import { falcorDependencyGraph } from "src/app/interfaces/falcor-dependency-graph";

export const analysisOutput: falcorDependencyGraph =
{
  "nodesById": {
    "0: force-graph - ForceGraph (Function)": {
      "Name": "ForceGraph (Function)",
      "Type": "Function",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/utils/force-graph.ts",
      "Non Filterable": {}
    },
    "1: analysis-output - analysisOutput (const)": {
      "Name": "analysisOutput (const)",
      "Type": "Const",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/utils/analysis-output.ts",
      "Non Filterable": {}
    },
    "2: non-root-service-example - NonRootServiceExample (Service)": {
      "Name": "NonRootServiceExample (Service)",
      "Type": "Angular Service",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/services/non-root-service-example.ts",
      "Non Filterable": {},
      "Service DI Error": "NonRootServiceExample: Angular Service Injector is not provided in root. (https://angular.io/guide/architecture-services#providing-services)"
    },
    "3: invalid-injectable-service - InvalidInjectableService (Service)": {
      "Name": "InvalidInjectableService (Service)",
      "Type": "Angular Service",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/services/invalid-injectable-service.ts",
      "Non Filterable": {},
      "Service DI Error": "InvalidInjectableService: Angular Service Injector is not provided in root: @Injectable({\n  providedIn: 'any'\n})"
    },
    "4: hero.service - HeroService (Service)": {
      "Name": "HeroService (Service)",
      "Type": "Angular Service",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/services/hero.service.ts",
      "Non Filterable": {}
    },
    "5: app.module - AppModule (Module)": {
      "Name": "AppModule (Module)",
      "Type": "Angular Module",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.module.ts",
      "Non Filterable": {}
    },
    "6: app.component - AppComponent (Component)": {
      "Name": "AppComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.ts",
      "Non Filterable": {
        "selectorProperty": "app-root",
        "filePathToTemplate": "./app.component.html"
      },
      "Service DI Warning": "AppComponent: Review Angular Service Injector for injected services"
    },
    "6: app.component - valueitem (Arrow Function - const)": {
      "Name": "valueitem (Arrow Function - const)",
      "Type": "Arrow Function",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.ts",
      "Non Filterable": {}
    },
    "6: app.component - testVariable1 (var)": {
      "Name": "testVariable1 (var)",
      "Type": "Var variable",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.ts",
      "Non Filterable": {}
    },
    "6: app.component - referencerLetVariable (let)": {
      "Name": "referencerLetVariable (let)",
      "Type": "Let variable",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.ts",
      "Non Filterable": {}
    },
    "7: app-routing.module - AppRoutingModule (Module)": {
      "Name": "AppRoutingModule (Module)",
      "Type": "Angular Module",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app-routing.module.ts",
      "Non Filterable": {}
    },
    "7: app-routing.module - routes (const)": {
      "Name": "routes (const)",
      "Type": "Const",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app-routing.module.ts",
      "Non Filterable": {}
    },
    "8: rjm-test-component.component - RjmTestComponentComponent (Component)": {
      "Name": "RjmTestComponentComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/rjm-test-component/rjm-test-component.component.ts",
      "Non Filterable": {
        "selectorProperty": "app-rjm-test-component",
        "filePathToTemplate": "./rjm-test-component.component.html"
      }
    },
    "9: node-filter-presentation.component - NodeFilterPresentationComponent (Component)": {
      "Name": "NodeFilterPresentationComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-filter-presentation/node-filter-presentation.component.ts",
      "Non Filterable": {
        "selectorProperty": "node-filter-presentation",
        "filePathToTemplate": "./node-filter-presentation.component.html"
      }
    },
    "10: node-details-presentation.component - NodeDetailsPresentationComponent (Component)": {
      "Name": "NodeDetailsPresentationComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-details-presentation/node-details-presentation.component.ts",
      "Non Filterable": {
        "selectorProperty": "node-details-presentation",
        "filePathToTemplate": "./node-details-presentation.component.html"
      }
    },
    "11: link-filter-presentation.component - LinkFilterPresentationComponent (Component)": {
      "Name": "LinkFilterPresentationComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/link-filter-presentation/link-filter-presentation.component.ts",
      "Non Filterable": {
        "selectorProperty": "link-filter-presentation",
        "filePathToTemplate": "./link-filter-presentation.component.html"
      }
    },
    "12: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)": {
      "Name": "GraphDisplaySmartComponentComponent (Component)",
      "Type": "Angular Component",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/components/graph-display-smart-component/graph-display-smart-component.component.ts",
      "Non Filterable": {
        "selectorProperty": "app-graph-display-smart-component",
        "filePathToTemplate": "./graph-display-smart-component.component.html"
      }
    },
    "6: app.component - app.component.ts": {
      "Name": "app.component.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.ts",
      "Non Filterable": {}
    },
    "9: node-filter-presentation.component - node-filter-presentation.component.ts": {
      "Name": "node-filter-presentation.component.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-filter-presentation/node-filter-presentation.component.ts",
      "Non Filterable": {}
    },
    "11: link-filter-presentation.component - link-filter-presentation.component.ts": {
      "Name": "link-filter-presentation.component.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/link-filter-presentation/link-filter-presentation.component.ts",
      "Non Filterable": {}
    },
    "13: hero.service.spec - hero.service.spec.ts": {
      "Name": "hero.service.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/services/hero.service.spec.ts",
      "Non Filterable": {}
    },
    "14: main - main.ts": {
      "Name": "main.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/main.ts",
      "Non Filterable": {}
    },
    "5: app.module - app.module.ts": {
      "Name": "app.module.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.module.ts",
      "Non Filterable": {}
    },
    "15: app.component.spec - app.component.spec.ts": {
      "Name": "app.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/app.component.spec.ts",
      "Non Filterable": {}
    },
    "16: rjm-test-component.component.spec - rjm-test-component.component.spec.ts": {
      "Name": "rjm-test-component.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/rjm-test-component/rjm-test-component.component.spec.ts",
      "Non Filterable": {}
    },
    "17: node-filter-presentation.component.spec - node-filter-presentation.component.spec.ts": {
      "Name": "node-filter-presentation.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-filter-presentation/node-filter-presentation.component.spec.ts",
      "Non Filterable": {}
    },
    "18: node-details-presentation.component.spec - node-details-presentation.component.spec.ts": {
      "Name": "node-details-presentation.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/node-details-presentation/node-details-presentation.component.spec.ts",
      "Non Filterable": {}
    },
    "19: link-filter-presentation.component.spec - link-filter-presentation.component.spec.ts": {
      "Name": "link-filter-presentation.component.spec.ts",
      "Type": "Source File",
      "File Path": "/workspaces/Angular-Analyser/ng-analysis/src/app/link-filter-presentation/link-filter-presentation.component.spec.ts",
      "Non Filterable": {}
    },
    "20: graph-display-smart-component.component.spec - graph-display-smart-component.component.spec.ts": {
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
        "0: force-graph - ForceGraph (Function)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "1: analysis-output - analysisOutput (const)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "2: non-root-service-example - NonRootServiceExample (Service)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "3: invalid-injectable-service - InvalidInjectableService (Service)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "4: hero.service - HeroService (Service)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "5: app.module - AppModule (Module)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "6: app.component - AppComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "6: app.component - valueitem (Arrow Function - const)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "6: app.component - testVariable1 (var)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "6: app.component - referencerLetVariable (let)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "7: app-routing.module - AppRoutingModule (Module)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "7: app-routing.module - routes (const)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "8: rjm-test-component.component - RjmTestComponentComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "9: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "10: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "11: link-filter-presentation.component - LinkFilterPresentationComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "12: graph-display-smart-component.component - GraphDisplaySmartComponentComponent (Component)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "6: app.component - app.component.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "9: node-filter-presentation.component - node-filter-presentation.component.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "11: link-filter-presentation.component - link-filter-presentation.component.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "13: hero.service.spec - hero.service.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "14: main - main.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "5: app.module - app.module.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "15: app.component.spec - app.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "16: rjm-test-component.component.spec - rjm-test-component.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "17: node-filter-presentation.component.spec - node-filter-presentation.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "18: node-details-presentation.component.spec - node-details-presentation.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "19: link-filter-presentation.component.spec - link-filter-presentation.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "20: graph-display-smart-component.component.spec - graph-display-smart-component.component.spec.ts"
      ]
    }
  ],
  "links": [
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: node-filter-presentation.component - NodeFilterPresentationComponent (Component)"
        ]
      },
      "Type": "Angular Template Selector"
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.component - AppComponent (Component)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "10: node-details-presentation.component - NodeDetailsPresentationComponent (Component)"
        ]
      },
      "Type": "Angular Template Selector"
    }
  ]
}