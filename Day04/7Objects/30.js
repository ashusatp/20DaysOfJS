//  how to iterate object

const person = {
    name:"ASHU",
    age:20,
    "person hobies":["WatchingMovies","PlayinGames", "sleeping" , "listningMusic"] 
}

//  ========== METHOD (1) ================
    //for in loop
       for(let key in person){
           console.log(key);
       }// so it will print the keysName of an object

     
       console.log("\n");
       for(let key in person){
        console.log(person[key]);
       } // it will print all the values of key

       console.log("\n");
       for(let key in person){
            console.log(`${key} : ${person[key]}`);
       } // it will print all keyValuePairs



//  ========== METHOD (2) ================
    // object.keys --> basically it will give an array which contains only keyNames
    console.log("\n");

    console.log(Object.keys(person));
    console.log(typeof (Object.keys(person)));
    // it will give object as a result because we know that the typeof any array is object.
    const val = Array.isArray((Object.keys(person)));
    console.log(val);

    for(let key of Object.keys(person)){
        console.log(person[key]);
    }// so this loop will print values     :)
