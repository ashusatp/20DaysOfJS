class emp{
    constructor(n){
        this.name = n;
    }
    msg(){
        console.log("hi...");
    }
}

class manager extends emp{
    constructor(n,d){
        super(n);
        this.department = d;
    }
    msg(){
        console.log("Hello..");
    }
    info(){
        super.msg();  // it will call pairent's method
        this.msg();   // it will call child's method
        console.log(`${this.name} is manager of department ${this.department}`);
    }
}

let mng1 = new manager("Ashutosh", "Web Dev");
console.log(mng1.info());

class admin extends manager{
    
}