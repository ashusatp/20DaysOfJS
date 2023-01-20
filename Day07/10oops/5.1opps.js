// class and objects

class Customer{
    constructor(n){ // property of the class
        this.variableName = n ; 
    }

    age = 28; // if we want to add new variable outside of constructor or function then we can skip the keyWord before declaration of any variable.

    buy(){// method of class
        console.log("hello");
        console.log(this.variableName);
    }
}

// OBJECT ------>
let customer1 = new Customer("Ashutosh");
console.log(customer1);
customer1.buy();



console.log("\n");


// inheritance ------>
class GuestCustomer extends Customer{
    hello(){
        console.log("hi guys");
    }
}

let customer2 = new GuestCustomer("Ashu");
console.log(customer2);
customer2.buy();
customer2.hello();