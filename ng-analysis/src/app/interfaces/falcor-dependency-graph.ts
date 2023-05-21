export interface falcorDependencyGraph {
    nodesById: {
        [key in string]: {
            [key in string | 'name' | 'type' | 'filePath']: string
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
