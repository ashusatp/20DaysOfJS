// ******** ========= how to clone an array  ======= *******

let array1 = [11,22,33,44];
let array2= array1;
console.log(array1===array2); // --> it will give true as a result

// but
 let arr1=[11,22,33,44];
 let arr2=[11,22,33,44];
 console.log(arr1===arr2); // -->  it will give false as a result
 arr1.push(45);
 console.log(arr1)
 console.log(arr2)

// ============  best way to clone array ===========

let a1=[11,22,33,44];
// 1) slice method
let a2=a1.slice(0);
console.log(a1===a2);
console.log(a1)
console.log(a2)

// 2)CONCATE METHOD
let a3=[].concat(array1);
console.log(a1===a3);
console.log(a3);

// 3)new way "spread operator" for cloning
let a4= [...a1]; 
console.log(a1===a4);
console.log(a4);
