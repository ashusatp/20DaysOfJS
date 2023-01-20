//  for loop in array

let fruits=["apple","mangoes", "grapes", "banana"];
let n=fruits.length;
let upperFruits = [];
for(let i=0; i<n ; i++){
    console.log(fruits[i]);
    upperFruits.push(fruits[i].toUpperCase());
}
console.log(upperFruits);

//Use const for creating an array
 const arr = [1,2,3,4];
 //we can use each and every methods of array in arrray because wehave not change the address of the array we just modified array and address of array remains same.
 y=arr.pop();
 console.log(y);
 
// const arr2= [1,2,3,4,5];
// arr2=[2,5,6,7];
//  this will throw an error because here we have tried to change the address of this arr2

let arr2 = [1,2,3,4,5];
console.log("Array before updatation: ",arr2);
arr2=[2,5,6,7];
// now as arr2 is no longer constant variable now we can change the address of the arr2.
console.log("Array after updatation: ",arr2);