export interface falcorDependencyGraph {
    nodesById: {
        [key in string]: {
            [key in string | 'Name' | 'Type' | 'FilePath' | 'Non Filterable']: string | any
        }
    },
    nodes: {
        $type: "ref",
        value: string[]
    }[]
    links: ({
        source: {
            $type: "ref",
            value: string[]
        },
        target: {
            $type: "ref",
            value: string[]
        }
    } & {
        [key: string]: string | {
            $type: "ref",
            value: string[]
        };
    })[]
}
