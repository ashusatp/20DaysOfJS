// ============ spread operator in array ====================

const arr1 = [1,2,3,4] ;
const arr2 = [5,6,7,8] ;

const newArray = [...arr1, ...arr2];
console.log(newArray);

// ******* spreading of a string
const newArray2 =[..."abc"]; // it will spread "abc" to "a" ,"b" and "c"
console.log(newArray2);

//const newArray3 =[...12345];  it will not spread "12345" because integer is not iterable. means we cant apply any loop on integer.



// ============ spread operator in OBJECT ====================

const obj1 ={
    key1: "value1" ,
    key2: "value2" ,
    key1: "value3"  // it will update the key1 or overWrite the key1 so from now when we we call key1 then it will give value3 as result    :)
}

const obj2={
    key2:  "value6", // now it will depend on the way of spreading
    key3: "value4",
    key3: "value5"
}

const newObject ={ ...obj1, ...obj2}; // so in this case obj2 will spread after the obj1 so key 2 will be updated as "value6"
console.log(newObject);
console.log("\n");

const newObject2 ={ ...obj2 ,...obj1}; // here obj2 is spreading before the obj1 so the value of key2 will be value2
console.log(newObject2);
console.log("\n");

const newObject3 ={ ...obj2 ,...obj1, newKey: 24 }; 
console.log(newObject3);
console.log("\n");

const newObject4 = {..."abc"}; // it will spread "abc" to "0": "a" , "1":"b",  "2":"c"
console.log(newObject4);
console.log("\n");

const newObject5 ={...["item1" ,"item2"]};
console.log(newObject5);

