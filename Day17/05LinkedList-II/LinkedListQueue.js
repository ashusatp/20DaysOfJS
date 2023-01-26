const LinkedList = require('./TailOverview');
class LinkedListQueue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.removeFromFront();
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    getSize(){
        return this.list.getSize();
    }

    print(){
        this.list.print();
    }
}
const queue = new LinkedListQueue();
queue.enqueue(11);
queue.enqueue(22);
queue.enqueue(44);
queue.enqueue(55);
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.getSize());
console.log(queue.isEmpty());