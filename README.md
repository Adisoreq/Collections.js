# Collections.js
JavaScript library implementing C# collections and data structures

## Queue
Queue is a **FIFO** (**F**irst **I**n - **F**irst **O**ut) data structure, focusing on it's oldest element.

```mermaid
flowchart LR

A[/A/] -- First in --> Q(Queue)
B[/B/] -- Second in --> Q
C[/C/] -- Third in --> Q
Q -- third out --> Z[/C/] -- second out --> Y[/B/] -- first out --> X[/A/]

```

### Methods:
- **`clear()`** - erases all elements
- **`contains(object)`** - returns `true` if object exists in the queue
- **`dequeue()`** - removes the oldest element
- **`enqueue(object)`** - adds an object at the end of the queue
- **`isEmpty()`** - returns `true` if there are no elements in the queue
- **`length()`** - returns number of elements
- **`peek()`** - returns the oldest element
- **`values()`** - returns shallow copy of the queue content

### Example:
```javascript
const q = new Queue()
const str = "Hello world!";

for (let i = 0; i < str.length; i++) {
    q.enqueue(str[i])
}

while (!q.isEmpty()) {
    const element = q.peek()
    q.dequeue()
    console.log('Queued element: [', element, ']')
}
```

## Stack
Stack is a **FILO** (**F**irst **I**n - **L**ast **O**ut) data structure, focusing on it's last element.

```mermaid
flowchart LR

C[/C/] -- Third in (on top) --> Q(Stack)
B[/B/] -- Second in (in the middle) --> Q
A[/A/] -- First in (on bottom) --> Q
Q -- third out --> Z[/A/] -- second out --> Y[/B/] -- first out --> X[/C/]

```

### Methods:
- **`clear()`** - erases all elements
- **`contains(object)`** - returns `true` if object exists in the stack
- **`isEmpty()`** - returns `true` if there are no elements in the stack
- **`lastIndex`** - returns index of the element on top
- **`length()`** - returns number of elements
- **`peek()`** - returns the element on top
- **`pop()`** - removes the element on top of the stack and returns it
- **`push(object)`** - adds an object on top of the stack
- **`values()`** - returns shallow copy of the stack content

### Example:
```javascript
const s = new Stack()
const str = "!never odd or eveN"

for (let char of str) {
    if (char != ' ') {
        s.push(char)
    }
}

let output = ''

while (!s.isEmpty) {
    const element = s.pop()
    output += element + ' '
}

console.log(output)
```

## Graph
Graph is a mathematical structure based on unique elements (nodes / vertices) and connections between them (edges). Groups of vertices connected by edges (groups / components) may assemble into paths, trees or cliques.

```mermaid
flowchart TB
    subgraph three [Clique]
    C1((C1)) <--> C2((C2)) <--> C3((C3)) <--> C4((C4))
    C4 <--> C1
    C1 <--> C3
    C2 <--> C4
    end
    subgraph two [Tree]
    B1((B1)) <--> B2((B2))
    B1 <--> B3((B3))
    B1 <--> B4((B4))
    end
    subgraph one [Path]
    A1((A1)) <--> A2((A2)) <--> A3((A3)) <--> A4((A4))
    end

```

### Methods:
- **`addNode(node)`** - adds orphan node to the graph
- **`addNodes(nodes, connected)`** - adds multiple nodes to the graph, and connects them with each other, if `connected` is set to `true`
- **`clear()`** - erases all nodes and vertices
- **`contains(node)`** - returns `true` if node exists in the graph
- **`findConnectedComponents()`** - finds all groups of connected nodes (2 or more)
- **`getEdges(node)`** - returns array of all nodes connected to the specified node
- **`isConnected(A, B)`** - returns `true` if edge from node A to node B exists
- **`isEmpty()`** - returns `true` if there are no elements in the graph
- **`isOrphan(node)`** - returns `true` if node isn't connected to anything
- **`length()`** - returns number of elements

## Installation

No NPM / CDN yet 😥

## License

[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Copyright

Copyright © 2025 Adrian P. (Adisoreq)
