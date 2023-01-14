// ========= Arrow functions =================

// first we will have to write an expressional function

const login = function(){
  console.log("LOGEDin");
}
login();

// we can replace above function with the arrowFunction.

const logOut = () => {
  console.log("logedOut");
}
logOut();


// ============== shortCut ===============

// const sum = (num1, num2) => {
//     return num1 + num2 ;
// }
// const result = sum(4,5);
// console.log(result);

// or
const sum = (num1, num2) => num1 + num2 ;
const result = sum(4,5);
console.log(result);

