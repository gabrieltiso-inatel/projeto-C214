import { GraphNode } from './graphNode';

export class Graph<T> {
    nodes: GraphNode<T>[] = [];

    addNode(value: T) {
        this.nodes.push(new GraphNode(value));
    }

    depthFirstSearch(start: GraphNode<T>): GraphNode<T>[] {
        const visited = new Set<GraphNode<T>>();
        const stack = [start];

        while (stack.length > 0) {
            const node = stack.pop();
            if (!visited.has(node)) {
                visited.add(node);
                node.edges.forEach(edge => {
                    stack.push(edge);
                });
            }
        }

        return Array.from(visited);
    }

    breadthFirstSearch(start: GraphNode<T>) {
        const visited = new Set<GraphNode<T>>();
        const queue = [start];

        while (queue.length > 0) {
            const node = queue.shift();
            if (!visited.has(node)) {
                visited.add(node);
                node.edges.forEach(edge => {
                    queue.push(edge);
                });
            }
        }

        return visited;
    }
}