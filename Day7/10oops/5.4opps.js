// Mixing

let usefullMethod = {
    sayHi(){
        console.log("Hi...");
    },

    sayBye(){
        console.log("Bye...");
    }
};
let usefullMethod2 = {
    sayWtf(){
        console.log("Wtf...");
    },

    sayB(){
        console.log("B...");
    }
};

class user{
    constructor(){
        this.name = "Ashutosh"; 
    }
}

// mixing syntax
Object.assign(user.prototype, usefullMethod);


let usr1 = new user();
console.log(usr1.sayHi());
console.log(usr1.sayBye());

class admin extends user{
    
}
// mixing in admin class
Object.assign(admin.prototype, usefullMethod);
Object.assign(admin.prototype, usefullMethod2);
let adm1 = new admin();
console.log(adm1.sayHi());
