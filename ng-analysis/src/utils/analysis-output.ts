export interface falcorDependencyGraph {
    nodesById: {
        [key in string]: {
            name: string,
            type: string
        }
    },
    nodes: {
        $type: "ref",
        value: string[]
    }[]
    links: {
        source: {
            $type: "ref",
            value: string[]
        },
        target: {
            $type: "ref",
            value: string[]
        }
    }[]
}

export const analysisOutput: falcorDependencyGraph = {
    "nodesById": {
        "0: HeroService": {
            "name": "HeroService",
            "type": "class"
        },
        "1: class HeroService": {
            "name": "class HeroService",
            "type": "unknown"
        },
        "2: (alias) class HeroService\nimport HeroService": {
            "name": "(alias) class HeroService\nimport HeroService",
            "type": "unknown"
        },
        "3: AppModule": {
            "name": "AppModule",
            "type": "class"
        },
        "3: class AppModule": {
            "name": "class AppModule",
            "type": "unknown"
        },
        "4: (alias) class AppModule\nimport AppModule": {
            "name": "(alias) class AppModule\nimport AppModule",
            "type": "unknown"
        },
        "5: AppComponent": {
            "name": "AppComponent",
            "type": "class"
        },
        "5: class AppComponent": {
            "name": "class AppComponent",
            "type": "unknown"
        },
        "3: (alias) class AppComponent\nimport AppComponent": {
            "name": "(alias) class AppComponent\nimport AppComponent",
            "type": "unknown"
        },
        "6: (alias) class AppComponent\nimport AppComponent": {
            "name": "(alias) class AppComponent\nimport AppComponent",
            "type": "unknown"
        },
        "7: AppRoutingModule": {
            "name": "AppRoutingModule",
            "type": "class"
        },
        "7: class AppRoutingModule": {
            "name": "class AppRoutingModule",
            "type": "unknown"
        },
        "3: (alias) class AppRoutingModule\nimport AppRoutingModule": {
            "name": "(alias) class AppRoutingModule\nimport AppRoutingModule",
            "type": "unknown"
        },
        "8: RjmTestComponentComponent": {
            "name": "RjmTestComponentComponent",
            "type": "class"
        },
        "8: class RjmTestComponentComponent": {
            "name": "class RjmTestComponentComponent",
            "type": "unknown"
        },
        "3: (alias) class RjmTestComponentComponent\nimport RjmTestComponentComponent": {
            "name": "(alias) class RjmTestComponentComponent\nimport RjmTestComponentComponent",
            "type": "unknown"
        },
        "9: (alias) class RjmTestComponentComponent\nimport RjmTestComponentComponent": {
            "name": "(alias) class RjmTestComponentComponent\nimport RjmTestComponentComponent",
            "type": "unknown"
        }
    },
    "nodes": [
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "0: HeroService"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "3: AppModule"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "5: AppComponent"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "7: AppRoutingModule"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "8: RjmTestComponentComponent"
            ]
        }
    ],
    "links": [
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "0: HeroService"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: class HeroService"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "0: HeroService"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "2: (alias) class HeroService\nimport HeroService"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: AppModule"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: class AppModule"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: AppModule"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "4: (alias) class AppModule\nimport AppModule"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "5: AppComponent"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "5: class AppComponent"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "5: AppComponent"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: (alias) class AppComponent\nimport AppComponent"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "5: AppComponent"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "6: (alias) class AppComponent\nimport AppComponent"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "7: AppRoutingModule"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "7: class AppRoutingModule"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "7: AppRoutingModule"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: (alias) class AppRoutingModule\nimport AppRoutingModule"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "8: RjmTestComponentComponent"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "8: class RjmTestComponentComponent"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "8: RjmTestComponentComponent"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: (alias) class RjmTestComponentComponent\nimport RjmTestComponentComponent"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "8: RjmTestComponentComponent"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "9: (alias) class RjmTestComponentComponent\nimport RjmTestComponentComponent"
                ]
            }
        }
    ]
}