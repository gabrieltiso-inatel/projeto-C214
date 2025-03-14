export class GraphNode<T> {
    value: T;
    edges: GraphNode<T>[];

    constructor(value: T) {
        this.value = value;
        this.edges = [];
    }

    getNumberOfEdges() {
        return this.edges.length;
    }

    addEdge(node: GraphNode<T>) {
        this.edges.push(node);
    }

    removeEdge(node: GraphNode<T>) {
        if (this.edges.includes(node)) {
            this.edges = this.edges.filter(edge => edge !== node);
            return
        }

        throw new Error('Edge not found');
    }
}