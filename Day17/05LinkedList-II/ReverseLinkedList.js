class Node{
    constructor(element){
        this.value = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //[+] add(element)
    add(element){
        var elementNode = new Node(element);
        if(this.head == null){
            this.head = elementNode;
            this.size++;
            return this.head;
        }

        var curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = elementNode;
        this.size++
        return this.head;
    }

    //[+]insertAt(element, location)
    insertAt(element,location){
        if(location < 0 || location >= this.size){
            return console.log('Please enter a valid index');
        }else{
            var node = new Node(element);
            var curr,prev;

            curr = this.head;
            if(location === 1){
                node.next = curr;
                this.head = node;
                
               
            }else{
                var count = 1;
                while(count <= location){
                    prev = curr;
                    curr = curr.next;
                    count++;
                }
                prev.next = node;
                node.next = curr;

            }
            this.size++;
        }
        return this.head;
    }

    //[+] removeFrom(location)
    removeFrom(location){
        if(location <0 || location >=this.size){
            return console.log('Please Enter a valid index no.');
        }else{
            var deletedNode;
            var curr,prev;
            curr = this.head;
            if(location === 0){
                deletedNode = this.head.value;
                this.head = curr.next;
                curr.next = null;
            }else{
                var count = 0;
                while(count < location){
                    prev = curr;
                    curr = curr.next;
                    count++ 
                }
                deletedNode = curr.value;
                prev.next = curr.next;
                curr.next = null;
            }
            this.size--;
            return deletedNode;
        }
    }

    //[+] removeElement(element)
    removeElement(element){
        var curr ,prev;
        curr = this.head;
        while(curr){
            if(curr.value === element){
                if(prev == null){
                    this.head = curr.next;
                    curr.next = null;
                }else{
                    prev.next = curr.next;
                    curr.next = null;
                }
                this.size --;
                return curr.value;
            }
            prev = curr;
            curr = curr.next;
        }
        
        return -1;
    }
    
    
    //[+] isEmpty
    isEmpty(){
        return this.size === 0;
    }
    
    //[+] size_Of_List
    getSize(){
        return this.size;
    }

    //[+] PrintList
    print(){
        if(this.isEmpty()){
            console.log(`Empty list`);
            return;
        }
        var curr = this.head;
        var str = '';
        while(curr){
            str += `${curr.value} `;
            curr = curr.next;
        }
        console.log(str);
    }

    //[+] Reverse LinkedList
    reverse(){
        let prev,curr;
        if(this.size === 0){
            return null;
        }
        if(this.size === 1){
            curr = this.head;
            return curr;
        }

        curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this.head;
    }

}

var list = new LinkedList();
for(let i=1; i<=4; i++){
    list.add(i*10);
}
list.insertAt(40,2);
list.insertAt(50,1);
console.log('List is Empty: ',list.isEmpty());
list.print();
console.log('List Size: ',list.getSize());
list.reverse();
list.print();

// console.log("List size: ",list.getSize());