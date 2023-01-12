// primitve vs reference dataType


// ************===== primitveType =========************
let num1=6 ;
let num2=num1;

console.log("value of num1 is: ", num1);
console.log("value of num2 is: ", num2);
num1++;
console.log("After increment of num1");
console.log("value of num1 is: ", num1); // --> num1 will increse by 1
console.log("value of num2 is: ", num2);// -->  it will remain same


// *********========= reference dataType ======= ****
// array


let arr1= [1,23,3,4,5,6];
let arr2=arr1;
console.log("value of arr1 is: ", arr1);
console.log("value of arr2 is: ", arr2);
// modification in arr1
arr1[1]= 12; 
console.log("After modification of arr1");
console.log("value of arr1 is: ", arr1); // --> arr1 will be modified
console.log("value of arr2 is: ", arr2);// -->  it will also be modified same as the arr1

// note **************
//  when we asign any arrya to another array and then if we apply any modification or functions(pop,push,shift,unshift) on first array which is assigned to another array then the second array will also be changed automatically.