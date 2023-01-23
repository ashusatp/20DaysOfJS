
class Stack{
    constructor(){
        this.items = [];
    }
    // [+] push(element) - add an element to the top of the stack
    
    push(element){
        this.items.push(element);
    }
    
    // [+] pop() - remove the top most element from the stack
    pop(){
        return this.items.pop();
    }
    
    // [+] peek() - get the value of the top element without removing it
    peek(){
        return this.items[this.items.length - 1];
    }
    
    // [+] isEmpty() - check if the stack is isEmpty
    isEmpty(){
        return this.items.length === 0;
    }
    
    // [+] size() - get the number of elements in the stack
    size(){
        return this.items.length;
    }

    // [+] print() - visualize the element in the stack
    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
for(let i=1; i<=3; i++){
    stack.push(i*10);
}
stack.print();
let popedElement = stack.pop();
console.log(popedElement);
stack.print();