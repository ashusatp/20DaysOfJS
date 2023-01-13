// ========== OBJECTS ================
 
        // Arrays are good but not sufficient for real world data
        // for real world data, we use Object Store Key Value Pairs.
        // Objects don't have index

//  ************ How to create object ************
const person ={ name:"ASHU" , age:20};
console.log(person);
console.log("\n");

//  access --> ObjectName.KeyName
console.log("My nick name is: ",person.name);
console.log("\n");

// ------------- we can store array inside the objects---------
const newObj = {
    name:"ASHU",
    age:20,
    hobies:["WatchingMovies","PlayinGames", "sleeping" , "listningMusic"] 
}
console.log("My hobies are: ",newObj.hobies);
console.log("\n");


// =============== add new key value pair ==================
person.gender = "male";
console.log(person);
console.log("\n");

// ======== other method to access a keyValuePair ========
console.log(person["age"]);
// ::::::::::::::: note ::::::::::::::
/* in JS the keyNames are by default in stringType */
console.log("\n");


// ========== add an element in bracket method ========
person["height"]=5.8;
console.log(person);
console.log("\n");
// ========== some ways to write keyValuePairs=====================

      // if we will have to give space b/t the keyName the in that case we have to write key name inside the " key name "

const example= {
    name: "ASHUTOSH", 
    "person hobies" : ["WatchingMovies","PlayinGames", "sleeping" , "listningMusic"] 
    // as  we can see here that  in the place of keyName there are two words so we have to put that inside the dauble coat comas  
}
console.log(example);
