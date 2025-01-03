class Queue {
    // Variables
    #_Items = [];
    
    // Constructor
    constructor() {}

    // Methods
    enqueue(object) {
        this.#_Items.push(object);
    }

    dequeue() {
        return this.#_Items.length > 0 ? this.#_Items.shift() : undefined;
    }

    // Getters
    peek() {
        return this.#_Items.length > 0 ? this.#_Items[0] : undefined;
    }

    values() {
        return [...this.#_Items];
    }

    contains(object) {
        return this.#_Items.includes(object);
    }

    length() {
        return this.#_Items.length;
    }

    isEmpty() {
        return this.#_Items.length === 0;
    }
}
