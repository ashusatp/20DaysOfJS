class Queue{
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    
    //[+] enqueue(element) - add an element ti the queue
    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }
    
    //[+] dequeue() - remove the oldest element from the queue
    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
    // [+] isEmpty() - check if the queue is is empty 
    isEmpty(){
        return (this.rear - this.front) === 0;
    }
    
    // [+] peek() - get the value of the element at the front of the queue without removing it 
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }
        return null;
    }
    
    // [+] size() - get the number of the elements in the queue 
    size(){
        return this.rear - this.front;
    }
    
    // [+] print() - visualize the elements in the queue 
    print(){
        var s = ""
        for(let key of Object.keys(this.items)){
            s += this.items[key] + " ";
        }
        console.log(s);
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