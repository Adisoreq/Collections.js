class Graph {
    // Variables
    #_Items = new Map();

    // Constructor
    constructor() {}

    // Methods
    addEdge(nodeA, nodeB, mutual = false) {
        if (!this.#_Items.has(nodeA)) {
            this.#_Items.set(nodeA, new Set());
        }
        this.#_Items.get(nodeA).add(nodeB);

        if (mutual) {
            if (!this.#_Items.has(nodeB)) {
                this.#_Items.set(nodeB, new Set());
            }
            this.#_Items.get(nodeB).add(nodeA); 
        }
    }

    addNode(node) {
        if (!this.#_Items.has(node)) {
            this.#_Items.set(node, new Set());
        }
    }

    addNodes(nodes = [], connected = false) {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = 0; j < nodes.length; j++) {
                if (i !== j && connected) {
                    this.addEdge(nodes[i], nodes[j]);
                }
            }
        }
    }

    clear() {
        this.#_Items.clear();
    }

    // Getters
    get length() {
        return this.#_Items.size;
    }

    get isEmpty() {
        return this.#_Items.size === 0;
    }

    getEdges(node) {
        return this.#_Items.has(node) ? [...this.#_Items.get(node)] : undefined;
    }

    contains(node) {
        return this.#_Items.has(node);
    }

    isOrphan(node) {
        return this.contains(node) && this.#_Items.get(node).size === 0;
    }

    isConnected(nodeA, nodeB) {
        return this.#_Items.has(nodeA) && this.#_Items.get(nodeA).has(nodeB);
    }

    #dfs(node, visited, component) {
        visited.add(node);
        component.push(node);
        for (let neighbor of this.#_Items.get(node)) {
            if (!visited.has(neighbor)) {
                this.#dfs(neighbor, visited, component);
            }
        }
    }

    findConnectedComponents() {
        let visited = new Set();
        let components = [];

        for (let node of this.#_Items.keys()) {
            if (!visited.has(node)) {
                let component = [];
                this.#dfs(node, visited, component);
                components.push(component);
            }
        }

        return components;
    }

    getComponent(node) {
        for (let component of this.findConnectedComponents()) {
            if (component.includes(node)) {
                return component;
            }
        }
        return undefined;
    }
}
