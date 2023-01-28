class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    
    // [+] Hashing function to convert a string key to a numeric index
    hash(key){
        let total = 0;
        for(let i=0; i< key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    
    // [+] Set to store a key-value pair
    set(key,value){
        const index = this.hash(key);
        this.table[index] = value;
    }
    
    // [+] Get to retrieve a value given its key
    get(key){
        const index = this.hash(key);
        return this.table[index];
    }

    // [+] Remove to delete a key value pair
    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined;
    }

    display(){
        let str ='[ ';
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                str += `{${i} : ${this.table[i]}} `
            }
        }
        str += "]"
        console.log(str);
    }
}

const table = new HashTable(50);
table.set("name", "Ashu");
table.set("age", 20);
table.display()
console.log(table.get("name"));
table.remove("age");
table.display()