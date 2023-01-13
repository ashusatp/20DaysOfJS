// ============== computed properties ================

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj ={
//     objkey1 : "myvalue1",
//     onjkey2 : "myvalue2"
// } we want to print this !!!!!!!!!!

const obj ={
    key1: value1, 
    key2: value2
}
console.log(obj);
console.log("\n");

//  here we can't get our desired result

// ============== METHOD(1) =====================
const newObj ={
    [key1] : value1,  // applying a square bracket to the keyName is the process of object computing 
    [key2] : value2   // applying a square bracket to the keyName is the process of object computing
}
console.log(newObj);
console.log("\n");

// ============== METHOD(2) =====================
const oneNewObj ={};
oneNewObj[key1]=value1 ;
oneNewObj[key2]=value2;
console.log(oneNewObj);