let a =["apple", "mangoes", "grapes", "papaya", "oranges"];
console.log(a);

// ======== array push and pop ===========

a.push("banana"); // --> it will add element at the last of the array
console.log(a);
// array is mutable but string is not mutable because it is a primitive dataType

a.pop(); // --> it will remove elements from last
console.log(a);

console.log(a.pop()); // --> pop function is not only delete the element from any array it also provide us that element to use it further

let popedFruit = a.pop();
console.log(popedFruit); // ---> it will give papaya because we have used pop function 2 times 


// ========= array shift unshift==============

// unshift --> it will add elements at the starting index of an array

a.unshift("pinapple");
a.unshift("myFruit");
console.log(a);

// shift  ---> it will remove elements from starting
let y= a.shift();
console.log("removed fruits is: ",y);


//  ********========= note ==========************

//  push and pop are faster than shift and unshift