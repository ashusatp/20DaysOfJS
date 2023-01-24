class Queue{
    constructor(){
        this.items = [];
    }
    
    //[+] enqueue(element) - add an element ti the queue
    enqueue(element){
        this.items.push(element);
    }
    
    //[+] dequeue() - remove the oldest element from the queue
    dequeue(){
        return this.items.shift();
    }
    
    // [+] isEmpty() - check if the queue is is empty 
    isEmpty(){
        return this.items.length === 0;
    }
    
    // [+] peek() - get the value of the element at the front of the queue without removing it 
    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }
    
    // [+] size() - get the number of the elements in the queue 
    size(){
        return this.items.length;
    }
    
    // [+] print() - visualize the elements in the queue 
    print(){
        console.log(this.items.toString());
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
for(let i=1; i<=3; i++){
    queue.enqueue(i*10);
}
console.log(queue.size());
queue.print();
let popedElement = queue.dequeue();
console.log(popedElement);
queue.print();
console.log(queue.peek());