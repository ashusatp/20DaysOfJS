class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  // [+] isFull() - check if the queue is is Full
  isFull() {
    return this.currentLength === this.capacity;
  }

  // [+] isEmpty() - check if the queue is is empty
  isEmpty() {
    return this.currentLength === 0;
  }

  // [+] enqueue(element) - add an element ti the queue
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  // [+] dequeue() - remove the oldest element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }

    return item;
  }

  // [+] peek() - get the value of the element at the front of the queue without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  // [+] size() - get the number of the elements in the queue
  size() {
    return this.currentLength;
  }

  // [+] print() - visualize the elements in the queue
  print() {
    if (this.isEmpty()) {
      console.log(`Queue is empty`);
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log('Is Empty: ',queue.isEmpty());
for(let i=1; i<=5; i++){
    queue.enqueue(i*10);
}
queue.print();
console.log('is full: ',queue.isFull());
console.log('Poped element',queue.dequeue());
console.log('is full: ',queue.isFull());
queue.print();
queue.enqueue(90);
queue.print();
console.log('is full: ',queue.isFull());
console.log('Poped element',queue.dequeue());
console.log('Poped element',queue.dequeue());
queue.print();
console.log('is full: ',queue.isFull());
