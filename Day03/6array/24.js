// concatination of an array or addition of extra elements 

let array1 = [11,22,33,44];
let array2=array1.slice(0).concat(["item1","item2"]);


// METHOD1
console.log("The array1 is: ",array1);
console.log("The array2 is: ",array2);

// we can do same thing by another way
// METHOD2
let array3=[].concat(array1,["item1","item2"]);
console.log("The array3 is: ",array3);

// METHOD3
let array4=[...array1,"item1","item2"];
console.log("The array4 is: ",array4);

// METHOD4
let arr = [1,2,4,5];
let array5 = [...array1, ...arr];
console.log("The array5 is: ",array5);

