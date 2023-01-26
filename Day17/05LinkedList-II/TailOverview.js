class Node{
    constructor(element){
        this.value = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            return console.log('List is already Empty!!!');
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        let value = this.tail.value;
        if(this.getSize() === 1){
            this.head = null;
            this.tail = null;
        }else{
            let prev = this.head;
            while(prev.next !== this.tail){
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size --;
        return value;
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
            this.head = null;
            this.tail = null;
            return;
        }
        if(this.size === 1){
            curr = this.head;
            curr = this.tail;
            return;
        }

        curr = this.head;
        this.tail = curr;
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

module.exports = LinkedList;

// console.log("List size: ",list.getSize());