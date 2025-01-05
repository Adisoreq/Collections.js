# Collections.js
JavaScript library that extends native data structures with additional classes, including implemented C# collections.

```mermaid
classDiagram
    Collection <|-- BitArray
    Collection <|-- Queue
    Collection <|-- Stack
    Collection <|-- Graph
    Collection <|-- Tree
    Collection: #_Items
    Collection: isEmpty()
    Collection: length()
    Collection: values()
    Collection: contains()
    Collection: clear()
    Collection: display()
    class BitArray{
      #_Size
      setBit()
      set()
      reset()
      get()
    }
    class Queue{
      enqueue()
      dequeue()
      peek()
    }
    class Stack{
      push()
      pop()
      peek()
    }
    class Graph{
      addEdge()
      addNode()
      addNodes()
      getEdges()
      isOrphan()
      isConnected()
      findConnectedComponents()
      getComponent()
    }
    class Tree{
      degree
      root
      addRoot()
      add()
      addChildren()
      hasChildren()
      getChildren()
      printType()
    }
```

> [!NOTE]
> Skipped structures: Array, List, Map (Dictionary), Set

----
## BitArray

Bit array is a compact, space-efficient data structure for storing binary data. Allows to compress 8 boolean values into 1 byte.

| Byte |     0 |     1  |       2 |   ... |
|------|-------|--------|---------|-------|
| Bits | 0 - 7 | 8 - 15 | 16 - 23 | 24... |

For example, bool array will store 10 boolean values on 10 bytes (80 bits), while bit array will store them on 2 bytes (16 bits: 10 used, 6 unused).

### Methods:
- **`clear()`** - resets the bit array to initial state (`false (0)` on all bits)
- **`display()`** - prints the bit array to the console
- **`get(index)`** - returns the value of the bit at the specified index (`false (0)` or `true (1)`)
- **`isEmpty()`** - returns `true` if array stores no bits
- **`length()`** - returns the number of stored bits
- **`reset(index)`** - resets the bit at the `index` to `false (0)`
- **`set(index)`** sets the bit at the `index` to `true (1)`
- **`setBit(index, value)`** - sets the bit at the index to the specified value (`true (1)` / `false (0)`)
- **`values()`** - returns a shallow copy of stored values array

### Example:

```javascript

const bitArray = new BitArray(5); // 5 bits stored on 1 byte
bitArray.set(3);
bitArray.set(4);
bitArray.set(5);
bitArray.reset(3);
bitArray.display();

console.log(bitArray.get(5)); // true (1)
console.log(bitArray.get(3)); // false (0)
```

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
flowchart TD
    subgraph three [Clique]
    C1((C1)) & C2((C2)) <--> C3((C3)) & C4((C4))
    end
    subgraph two [Tree]
    B0((B0)) <--> B1((B1))
    B1 <--> B2((B2))
    B1 <--> B3((B3))
    B1 <--> B4((B4))
    end
    subgraph one [Path]
    A1((A1)) <--> A2((A2)) <--> A3((A3))
    end

```

### Methods:
- **`addEdge(A, B, mutual)`** - adds a connection from A to B (directed), and vice versa if `mutual` is `true` (undirected)
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

### Example:

```javascript
var g = new Graph();

// Single node
g.addNode(1)

// Multiple nodes
g.addNodes([2, 3, 6])

// Directional (one-sided) edge
g.addEdge(1, 2)

// Undirectional (two-sided) edge
g.addEdge(3, 6, true)

// Multiple nodes connected with each other (clique)
g.addNodes([8, 9, 10], true)

// Display graph
g.display();

// Display groups
console.log(g.findConnectedComponents())
```

## Tree

Tree is a hierarchical structure basing on parent-child relations. Similar to the directional graph, but with restricts parents to have limited child amount, and children to have only one parent. Also, child node cannot be parent to its superior node, creating a loop. Nodes with children are called **branches**, and child-less nodes are called **leaves**. Every tree has one root branch.

```mermaid
flowchart TD
    R((Root Element)) --> A((Child A))
    R --> B((Child B))
    A --> A1((A1))
    A --> A2((A2))
    B --> B1((B1))
    B --> B2((B2))
```

### Tree degree:

Tree degree determines the max number of children for every branch. The most common tree types are:
- **Binary Tree** - degree of **2** (every node can have up to 2 children)
- **Ternary Tree** - degree of **3** (every node can have up to 3 children)
- **Quaternary Tree(QuadTree)** - degree of **4** (every node can have up to 4 children)

### Variables:
- **`degree`** - degree of the tree
- **`root`** - root element of the tree (initially `null`)

### Methods:
- **`add(element, parent)`** - adds an element connected to it's parent to the tree
- **`addChildren(parent, [children])`** - adds multiple children connected to the specified parent
- **`addRoot(root)`** - adds root element, significant to add more elements
- **`display()`** - displays the tree's content
- **`getChildren(node)`** - returns array of node's children
- **`has(element)`** - returns `true` if element is part of the tree
- **`hasChildren(node)`** - returns `true`, if node has at least 1 child
- **`isEmpty()`** - returns `true` if there are no nodes in the tree
- **`length()`** - returns the number of elements (including root)
- **`printType()`** - returns a string value informing about tree's type or degree
- **`values()`** - returns a shallow copy of the tree's content

### Example:

```javascript

// Binary tree

const famliyTree = new Tree(2)

// Add the root element first
familyTree.addRoot('me')
// Adding a single node
familyTree.add('mother', 'me')
familyTree.add('father', 'me')
// Adding multiple nodes
familyTree.add('mother', ['grandmother A', 'grandfather A'])
familyTree.add('father', ['grandmother B', 'grandfather B'])

familyTree.display()

// Ternary tree

const positions = new Tree(3)

positions.addRoot({x: 0, y: 0})
positions.addChildren(positions.root, [{x: -30, y: -10}, {x: 0, y: -10}, {x: 30, y: -10}])
positions.addChildren({x: -30, y: -10}, [{x: -35, y: -20}, {x: -30, y: -20}, {x: -25, y: -20}])
positions.addChildren({x: 0, y: -10}, [{x: -5, y: -20}, {x: 0, y: -20}, {x: 5, y: -20}])
positions.addChildren({x: 30, y: -10}, [{x: 25, y: -20}, {x: 30, y: -20}, {x: 35, y: -20}])

positions.display()
```
> [!IMPORTANT]  
> Always create root element with **addRoot()** function, before adding more nodes
----

## Roadmap
1. Priority Queue
2. Sorted arrays

## License

[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Copyright

Copyright © 2025 Adrian P. (Adisoreq)
