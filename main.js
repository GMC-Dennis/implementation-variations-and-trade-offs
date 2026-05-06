class ArrayQueue {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.front = 0;
    this.rear = -1;
    this.count = 0;
  }

  enqueue(element) {
    if (this.count >= this.size) {
      throw new Error("Queue Overflow");
    }
    this.rear = (this.rear + 1) % this.size;
    this.arr[this.rear] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue Underflow");
    const val = this.arr[this.front];
    this.front = (this.front + 1) % this.size;
    this.count--;
    return val;
  }

  peek() {
    if (this.isEmpty()) throw new Error("Queue is empty");
    return this.arr[this.front];
  }

  isEmpty() {
    return this.count === 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(element) {
    const node = new Node(element);
    if (!this.rear) {
      this.front = this.rear = node;
      return;
    }
    this.rear.next = node;
    this.rear = node;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue Underflow");
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    return value;
  }

  peek() {
    if (this.isEmpty()) throw new Error("Queue is empty");
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  extractMin() {
    if (this.isEmpty()) throw new Error("Heap is empty");
    const min = this.heap[0];
    const end = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = end;
      this._heapifyDown();
    }
    return min;
  }

  peekMin() {
    if (this.isEmpty()) throw new Error("Heap is empty");
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  _heapifyDown() {
    let i = 0;
    const n = this.heap.length;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < n && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

class OrderedArrayPQ {
  constructor() {
    this.arr = [];
  }

  insert(element) {
    let i = 0;
    while (i < this.arr.length && this.arr[i] <= element) {
      i++;
    }
    this.arr.splice(i, 0, element);
  }

  extractMin() {
    if (this.isEmpty()) throw new Error("PQ is empty");
    return this.arr.shift();
  }

  peekMin() {
    if (this.isEmpty()) throw new Error("PQ is empty");
    return this.arr[0];
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}

console.log("ARRAY QUEUE");
const aq = new ArrayQueue(3);
aq.enqueue(1);
aq.enqueue(2);
console.log(aq.dequeue());
console.log(aq.peek());

console.log("\nLINKED LIST QUEUE");
const llq = new LinkedListQueue();
llq.enqueue(10);
llq.enqueue(20);
console.log(llq.dequeue());
console.log(llq.peek());

console.log("\nMIN HEAP PQ");
const heap = new MinHeap();
heap.insert(5);
heap.insert(2);
heap.insert(8);
console.log(heap.extractMin());
console.log(heap.peekMin());

console.log("\nORDERED ARRAY PQ");
const pq = new OrderedArrayPQ();
pq.insert(7);
pq.insert(1);
pq.insert(3);
console.log(pq.extractMin());
console.log(pq.peekMin());