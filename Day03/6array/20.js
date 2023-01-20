// modify
let fruis =["apple", "mangoes", "grapes"];
fruis[1]="banana";
console.log(fruis);

// TypeChecking

console.log(typeof fruis);  //basically an array is a object in javaScript

console.log(Array.isArray(fruis)); // this function is used in array to check is it an array or not

// In js there are 2 types of objects one is array and another is   object Literal
let obj = {};  // this is an object literal

console.log(Array.isArray(obj)); // it will give false as a result because we know obj is not an array
