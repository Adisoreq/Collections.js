class Queue {
    // Variables
    #_Items = [];
    #_LastIndex;
    
    // Constructor
    constructor() {
        this.#_LastIndex = -1;
    }
    
    // Methods
    peek() {
        if (this.#_LastIndex > -1)
            return this.#_Items[0];
    }
    enqueue(object) {
        this.#_Items.push(object);
        this.#_LastIndex++;
    }
    dequeue() {
        if (this.#_LastIndex > -1) {
            this.#_Items.shift();
            this.#_LastIndex--;
        }
    }
}
