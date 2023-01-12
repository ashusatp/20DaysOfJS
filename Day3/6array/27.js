// ============ array destructuring =================

const myArray = ["value1","value2","value3","value4"];
// let var1 = myArray[0];
// let var2 = myArray[1];

// console.log("Value of Var1: ",var1);
// console.log("Value of Var2: ",var2);

// =============SHORTCUT=================



// =========== CONCEPT 1) ============
let [var1, var2]=myArray;
console.log("Value of Var1: ",var1); // value1
console.log("Value of Var2: ",var2); // value2

// now we can update these two variables because we have assigned let declaration statements
console.log("\n");
var1="Hello";
console.log("Value of Var1 after Updatation: ",var1);
console.log("\n");
//  But the above updatation can't be possible if we will declare our variable with the help of const declaration statement



// =============== CONCEPT (2) =================
// if we have less no. of elements in the array
const myArray2 = ["value1"];
let [myvar1 , myvar2]=myArray2;
console.log(myvar1); // value1
console.log(myvar2); // it will give undefined as a result

console.log("\n");

// ============= CONCEPT(3) ================
//  if we want to  skip any element in the array while destructuring of a array we lewave the space of that element

const myArray3 = ["value1","value2","value3","value4", "value5"];
let [newVar1, , newVar3, ,newVar5 ]=myArray3;
console.log(newVar3); //value3
console.log(newVar5); // value5

let myNewArray = myArray3.slice(2);
console.log("My new array will be: ",myNewArray);