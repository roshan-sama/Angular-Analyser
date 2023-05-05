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

export const analysisOutput: falcorDependencyGraph =
{
    "nodesById": {
        "0: hero.service": {
            "name": "HeroService",
            "type": "class"
        },
        "1: app.component": {
            "name": "app.component",
            "type": "unknown"
        },
        "2: hero.service.spec": {
            "name": "hero.service.spec",
            "type": "unknown"
        },
        "3: app.module": {
            "name": "AppModule",
            "type": "class"
        },
        "4: main": {
            "name": "main",
            "type": "unknown"
        },
        "5: app.component.spec": {
            "name": "app.component.spec",
            "type": "unknown"
        },
        "6: app-routing.module": {
            "name": "AppRoutingModule",
            "type": "class"
        },
        "7: rjm-test-component.component": {
            "name": "RjmTestComponentComponent",
            "type": "class"
        },
        "8: rjm-test-component.component.spec": {
            "name": "rjm-test-component.component.spec",
            "type": "unknown"
        }
    },
    "nodes": [
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "0: hero.service"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "1: app.component"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "2: hero.service.spec"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "3: app.module"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "4: main"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "5: app.component.spec"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "6: app-routing.module"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "7: rjm-test-component.component"
            ]
        },
        {
            "$type": "ref",
            "value": [
                "nodesById",
                "8: rjm-test-component.component.spec"
            ]
        }
    ],
    "links": [
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "0: hero.service"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: app.component"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "0: hero.service"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: app.component"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "0: hero.service"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "2: hero.service.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "0: hero.service"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "2: hero.service.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "0: hero.service"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "2: hero.service.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: app.module"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "4: main"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: app.module"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "4: main"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: app.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: app.module"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: app.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: app.module"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: app.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: app.module"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: app.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "5: app.component.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: app.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "5: app.component.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: app.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "5: app.component.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: app.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "5: app.component.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "1: app.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "5: app.component.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "6: app-routing.module"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: app.module"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "6: app-routing.module"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: app.module"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "7: rjm-test-component.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: app.module"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "7: rjm-test-component.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "3: app.module"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "7: rjm-test-component.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "8: rjm-test-component.component.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "7: rjm-test-component.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "8: rjm-test-component.component.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "7: rjm-test-component.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "8: rjm-test-component.component.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "7: rjm-test-component.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "8: rjm-test-component.component.spec"
                ]
            }
        },
        {
            "source": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "7: rjm-test-component.component"
                ]
            },
            "target": {
                "$type": "ref",
                "value": [
                    "nodesById",
                    "8: rjm-test-component.component.spec"
                ]
            }
        }
    ]
}