class Tree {
    // Variables
    #_Items = new Map();
        
    // Constructor
    constructor(deg = 2) {
        if (deg < 1) {
            throw new Error('Invalid degree');
        }
        this.degree = deg;
        this.root = null;
    }
    
    // Methods
    addRoot(root) {
        if (this.root !== null) {
            throw new Error('Tree must have only one root element!');
        }
        this.#_Items.set(root, new Set());
        this.root = root;
    }

    add(object, parent) {
        if (!this.#_Items.has(parent)) {
            throw new Error('Invalid parent!');
        }
        if (this.#_Items.has(object)) {
            throw new Error('Object already exists!');
        }
        if (this.#_Items.get(parent).size >= this.degree) {
            throw new Error(`Cannot add more than ${this.degree} children to a node.`);
        }
        this.#_Items.set(object, new Set());
        this.#_Items.get(parent).add(object);
    }
    
    addChildren(parent, children = []) {
        for (let child of children) {
            this.add(child, parent);
        }
    }
    
    // Getters
    get length() {
        return this.#_Items.size;
    }
    
    get isEmpty() {
        return this.#_Items.size === 0;
    }
    
    has(object) {
        return this.#_Items.has(object);
    }
    
    hasChildren(object) {
        return this.#_Items.has(object) && this.#_Items.get(object).size > 0; // Simplified
    }
    
    getChildren(object) {
        if (!this.#_Items.has(object)) {
            return [];
        }
        return [...this.#_Items.get(object)];
    }
    
    values() {
        return Array.from(this.#_Items.values()); // Return only the values (children sets)
    }
    
    printType() {
        switch (this.degree) {
            case 2: return 'Binary';
            case 3: return 'Ternary';
            case 4: return 'Quaternary';
            default: return `${this.degree}. degree`;
        }
    }
    
    // Display
    display() {
        let output = '';
        for (let key of this.#_Items.keys()) {
            let value = this.#_Items.get(key);
            output += `\n ${key}${this.hasChildren(key) ? ` => ${[...value].join(', ')}` : ''}`;
        }
        console.log(`[${this.printType()}] Tree (${this.#_Items.size}) {\n ${this.root} [root] ${output}\n}`);
    }
}
