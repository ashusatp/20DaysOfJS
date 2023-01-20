"use strict"
/* javascript gave us freedom due to which we can do lot of mistakes and after doing mistake it don't even show the error . so, to counter that we wrote "use strict" at the starting of our script */


//*****intro to variables***

// variables can store some informtion
// we can use that information later
// we can update or change that information later

// declare a variable

var firstName = 'Ashutosh'  // cammel case writing

//  use a variable
console.log(firstName)

// updatation of variable

firstName = 'Ashu'
console.log(firstName)


var first1 = 12
console.log(first1-10)

// base and power operator
console.log(first1**2)
console.log(first1**0.5)

//  ****some valid variable syntax****
var _firstName = 10             // snake case writing
var first_Name = 12.1          // snake case writing
var $firstName = true
var first$Name = "A"


//  ****let Keyword****
// declare variable with let 
//  more recamanded

let assa = "AASSHHUU"
console.log(assa) 

// initially some problems were faced by using var. thatswhy now, all developer are using let in place of var while they declare the variable.

//  block scope vs function scope (cover latter)


//  ***** declare constant*****

const pi = 3.14 ; 
let r=4;
console.log(pi)
// updation of const variable is not possible
console.log(pi*(r**2))