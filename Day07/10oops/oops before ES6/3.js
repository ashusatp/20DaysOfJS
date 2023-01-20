//************ inheritance ***************

// ========== cunstructor function of Creature ====================
function Creature(lf){
    this.lifeSpan = lf;
}
Creature.prototype.breath = function(){
    console.log("breathing...");
}; 

// ========== cunstructor function of Person ====================
function Person(first ,last, a ){
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}
Person.prototype.fullName = function(){
    console.log(`${this.firstName} ${this.lastName}`);
}

//  ========== inheritance syntax ===========
Person.prototype.__proto__ = Object.create(Creature.prototype);

let person1 = new Person("Ashutosh", "Satapathy", 19);
let person2 = new Person("Ashu", "Sat", 19);

person2.fullName();
person2.breath();