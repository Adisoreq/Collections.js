class BitArray {
    // Variables
    #_Bytes;
    #_Size;

    // Constructor
    constructor(size) {
      this.#_Size = size;
      this.clear();
    }
  
    // Methods
    setBit(index, value) {
      if (index >= 0 && index < this.#_Size) {
        const byteIndex = Math.floor(index / 8);
        const bitIndex = index % 8;
        if (value) {
          this.#_Bytes[byteIndex] |= (1 << bitIndex);
        } else {
          this.#_Bytes[byteIndex] &= ~(1 << bitIndex);
        }
      }
    }

    set(index) {
        this.setBit(index, true);
    }

    reset(index) {
        this.setBit(index, false);
    }

    clear() {
        this.#_Bytes = new Uint8Array(Math.ceil(this.#_Size / 8));
    }
  
    // Getters
    get(index) {
      if (index >= 0 && index < this.#_Size) {
        const byteIndex = Math.floor(index / 8);
        const bitIndex = index % 8;
        return (this.#_Bytes[byteIndex] & (1 << bitIndex)) !== 0;
      }
      return false;
    }

    get length() {
        return this.#_Size;
    }

    get isEmpty() {
        return this.#_Size === 0;
    }

    values() {
        let values = [];
        for (let i = 0; i < this.#_Size; i++) {
            values.push(this.get(i));
        }
        return values.map(Number);
    }

    // Display
    display() {
        console.log(`BitArray (${this.#_Size}) {\n ${this.values().join(', ')} \n}`);
    }
}