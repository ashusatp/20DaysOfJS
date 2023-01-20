// ********** Method1 ****************
// using object
let person ={
    firstName: 'Ashutosh',
    lastName: 'Satapathy',
    age: 19,

    fullName : function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
};
person.fullName();

// ********* METHOD2 *************
let person2 = new Object;  // or let person2 = {};
person2.name = 'Ashu';
person2.sayHi = function(){
    console.log('Hi..');
};

person2.sayHi();

