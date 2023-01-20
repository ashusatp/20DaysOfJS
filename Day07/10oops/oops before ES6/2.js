// constructor function
function Person(first ,last, a ){
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}
Person.prototype.sayHi = function(){
    console.log('Hi..');
}
Person.prototype.changeAge = function(age){
    this.age = age;
}

let person1 = new Person("Ashutosh", "Satapathy", 19);
let person2 = new Person("Ashu", "Sat", 19);
person2.changeAge(20);
console.log(person2.age);
