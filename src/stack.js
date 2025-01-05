class Stack {
    #_Items = [];

    constructor() {}

    push(object) {
        this.#_Items.push(object);
    }

    pop() {
        return this.#_Items.length > 0 ? this.#_Items.pop() : undefined;
    }

    clear() {
        this.#_Items.clear();
    }

    // Getters
    get length() {
        return this.#_Items.length;
    }

    get isEmpty() {
        return this.#_Items.length === 0;
    }

    get peek() {
        return this.#_Items[this.#_Items.length - 1];
    }

    values() {
        return [...this.#_Items];
    }

    contains(object) {
        return this.#_Items.includes(object);
    }

    // Display
    display() {
        console.log(`Stack (${this.#_Items.length}) {\n ${this.#_Items.join(', ')}\n}`);
    }
}
