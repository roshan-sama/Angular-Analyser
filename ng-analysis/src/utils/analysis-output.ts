import { falcorDependencyGraph } from "src/app/interfaces/falcor-dependency-graph";

export const analysisOutput: falcorDependencyGraph =
{
  "nodesById": {
    "0: force-graphForceGraph (Function)": {
      "name": "ForceGraph",
      "type": "function",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/utils/force-graph.ts"
    },
    "1: app.componentapp.component.ts": {
      "name": "app.component.ts",
      "type": "sourceFile",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/app/app.component.ts"
    },
    "1: app.componentAppComponent (Class)": {
      "name": "AppComponent",
      "type": "class",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/app/app.component.ts"
    },
    "2: hero.serviceHeroService (Class)": {
      "name": "HeroService",
      "type": "class",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/services/hero.service.ts"
    },
    "3: hero.service.spechero.service.spec.ts": {
      "name": "hero.service.spec.ts",
      "type": "sourceFile",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/services/hero.service.spec.ts"
    },
    "4: app.moduleAppModule (Class)": {
      "name": "AppModule",
      "type": "class",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/app/app.module.ts"
    },
    "5: mainmain.ts": {
      "name": "main.ts",
      "type": "sourceFile",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/main.ts"
    },
    "4: app.moduleapp.module.ts": {
      "name": "app.module.ts",
      "type": "sourceFile",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/app/app.module.ts"
    },
    "6: app.component.specapp.component.spec.ts": {
      "name": "app.component.spec.ts",
      "type": "sourceFile",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/app/app.component.spec.ts"
    },
    "7: app-routing.moduleAppRoutingModule (Class)": {
      "name": "AppRoutingModule",
      "type": "class",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/app/app-routing.module.ts"
    },
    "8: rjm-test-component.componentRjmTestComponentComponent (Class)": {
      "name": "RjmTestComponentComponent",
      "type": "class",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/app/rjm-test-component/rjm-test-component.component.ts"
    },
    "9: rjm-test-component.component.specrjm-test-component.component.spec.ts": {
      "name": "rjm-test-component.component.spec.ts",
      "type": "sourceFile",
      "filePath": "/workspaces/vscode-remote-try-node/ng-analysis/src/app/rjm-test-component/rjm-test-component.component.spec.ts"
    }
  },
  "nodes": [
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "0: force-graphForceGraph (Function)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "1: app.componentapp.component.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "1: app.componentAppComponent (Class)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "2: hero.serviceHeroService (Class)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "3: hero.service.spechero.service.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "4: app.moduleAppModule (Class)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "5: mainmain.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "4: app.moduleapp.module.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "6: app.component.specapp.component.spec.ts"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "7: app-routing.moduleAppRoutingModule (Class)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "8: rjm-test-component.componentRjmTestComponentComponent (Class)"
      ]
    },
    {
      "$type": "ref",
      "value": [
        "nodesById",
        "9: rjm-test-component.component.specrjm-test-component.component.spec.ts"
      ]
    }
  ],
  "links": [
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "0: force-graphForceGraph (Function)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentapp.component.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "0: force-graphForceGraph (Function)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentAppComponent (Class)"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: hero.serviceHeroService (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentapp.component.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: hero.serviceHeroService (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentAppComponent (Class)"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: hero.serviceHeroService (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "3: hero.service.spechero.service.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: hero.serviceHeroService (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "3: hero.service.spechero.service.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "2: hero.serviceHeroService (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "3: hero.service.spechero.service.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "4: app.moduleAppModule (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "5: mainmain.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "4: app.moduleAppModule (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "5: mainmain.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentAppComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "4: app.moduleapp.module.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentAppComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "4: app.moduleAppModule (Class)"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentAppComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "4: app.moduleAppModule (Class)"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentAppComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.component.specapp.component.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentAppComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.component.specapp.component.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentAppComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.component.specapp.component.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentAppComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.component.specapp.component.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "1: app.componentAppComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "6: app.component.specapp.component.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app-routing.moduleAppRoutingModule (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "4: app.moduleapp.module.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "7: app-routing.moduleAppRoutingModule (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "4: app.moduleAppModule (Class)"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: rjm-test-component.componentRjmTestComponentComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "4: app.moduleapp.module.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: rjm-test-component.componentRjmTestComponentComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "4: app.moduleAppModule (Class)"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: rjm-test-component.componentRjmTestComponentComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component.specrjm-test-component.component.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: rjm-test-component.componentRjmTestComponentComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component.specrjm-test-component.component.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: rjm-test-component.componentRjmTestComponentComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component.specrjm-test-component.component.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: rjm-test-component.componentRjmTestComponentComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component.specrjm-test-component.component.spec.ts"
        ]
      }
    },
    {
      "source": {
        "$type": "ref",
        "value": [
          "nodesById",
          "8: rjm-test-component.componentRjmTestComponentComponent (Class)"
        ]
      },
      "target": {
        "$type": "ref",
        "value": [
          "nodesById",
          "9: rjm-test-component.component.specrjm-test-component.component.spec.ts"
        ]
      }
    }
  ]
}