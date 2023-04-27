export const analysisOutput1: outputGraph1 = {
    "nodesById": {
        "HeroService": {
            "name": "HeroService",
            "dependencies": [
                {
                    "$type": "ref",
                    "value": [
                        "nodesById",
                        "import(\"/workspaces/vscode-remote-try-node/ng-analysis/node_modules/@angular/common/http/index\").HttpClient"
                    ]
                }
            ]
        },
        "AppComponent": {
            "name": "AppComponent",
            "dependencies": [
                {
                    "$type": "ref",
                    "value": [
                        "nodesById",
                        "HeroService"
                    ]
                }
            ]
        },
        "RjmTestComponentComponent": {
            "name": "RjmTestComponentComponent",
            "dependencies": []
        },
        "import(\"/workspaces/vscode-remote-try-node/ng-analysis/node_modules/@angular/common/http/index\").HttpClient": {
            "name": "import(\"/workspaces/vscode-remote-try-node/ng-analysis/node_modules/@angular/common/http/index\").HttpClient",
            "dependencies": []
        }
    },
    "links": [
        {
            "source": "HeroService",
            "target": "import(\"/workspaces/vscode-remote-try-node/ng-analysis/node_modules/@angular/common/http/index\").HttpClient"
        },
        {
            "source": "AppComponent",
            "target": "HeroService"
        }
    ],
    "nodes": [
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "HeroService"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "AppComponent"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "RjmTestComponentComponent"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "import(\"/workspaces/vscode-remote-try-node/ng-analysis/node_modules/@angular/common/http/index\").HttpClient"
            ]
        }
    ]
}

export interface outputGraph1 {
    nodesById: {[key in string]: {name: string, dependencies: any[]}}
    links: any
    nodes: any
}