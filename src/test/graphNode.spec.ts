import { assert } from "chai";
import { GraphNode } from "../graph/graphNode"

describe("GraphNode", () => {
    it("should add an edge to the node", () => {
        const node1 = new GraphNode(5);
        const node2 = new GraphNode(10);
        node1.addEdge(node2);
        assert(node1.edges.includes(node2));
    });

    it("should remove an edge from the node", () => {
        const node1 = new GraphNode(5);
        const node2 = new GraphNode(10);
        node1.addEdge(node2);
        node1.removeEdge(node2);
        assert(!node1.edges.includes(node2));
    });

    it("should get the number of edges", () => {
        const node1 = new GraphNode(5);
        const node2 = new GraphNode(10);
        const node3 = new GraphNode(15);
        const node4 = new GraphNode(20);

        node1.addEdge(node2);
        node1.addEdge(node3);
        node1.addEdge(node4);

        node2.addEdge(node3);
        node2.addEdge(node4);

        node3.addEdge(node1)

        assert(node1.getNumberOfEdges() === 3);
        assert(node2.getNumberOfEdges() === 2);
        assert(node3.getNumberOfEdges() === 1);
    });

    it("should fail to remove an edge that does not exist", () => {
        const node1 = new GraphNode(5);
        const node2 = new GraphNode(10);
        node1.addEdge(node2);
        node1.removeEdge(new GraphNode(15));
        assert.throws(() => node1.removeEdge(new GraphNode(15)), 'Edge not found');
    });
});