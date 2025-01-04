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
        this.#_Items = [];
    }

    // Getters
    get peek() {
        return this.#_Items[this.#_Items.length - 1];
    }

    get length() {
        return this.#_Items.length;
    }

    get lastIndex() {
        return this.#_Items.length - 1;
    }

    values() {
        return [...this.#_Items];
    }

    contains(object) {
        return this.#_Items.includes(object);
    }

    get isEmpty() {
        return this.#_Items.length === 0;
    }
}
