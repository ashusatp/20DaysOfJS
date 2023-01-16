//  public and private property
class emp{
    //making private properties
    #name = ""; 
    constructor(n){
        this.#name = n; 
    }

    getName(){
        console.log(this.#name);
    }

    // making private methods
    #sayHi(){
        console.log("Hi...");
    }

    pubFn(){
        this.#sayHi();
    }
}

let emp1 = new emp("Ashutosh");
console.log(emp1);
console.log(emp1.name);
emp1.getName(); // private properties can be accessed wityh the help of methods (getter and setter)
emp1.pubFn();