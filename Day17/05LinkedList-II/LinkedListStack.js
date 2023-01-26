const LinkedList = require('./TailOverview');

class LinkedListStack{
    constructor(){
        this.list = new LinkedList();
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
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

const stack = new LinkedListStack();
stack.push(11)
stack.push(22)
stack.push(33)
stack.push(44)
stack.print();
console.log(stack.peek());
console.log(stack.getSize());
console.log(stack.isEmpty());