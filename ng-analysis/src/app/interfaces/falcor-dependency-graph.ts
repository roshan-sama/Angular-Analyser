export interface falcorDependencyGraph {
    nodesById: {
        [key in string]: {
            name: string,
            type: string,
            filePath?: string
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
