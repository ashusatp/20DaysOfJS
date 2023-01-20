//  truthy and falsy values

    // falsy values
       // false
       // ""
       // null
       // undefined
       // 0


    // truthy values
        //  "abc" 
        // 1, -1


        

let firstName = "" ;  // --> all falsy value will give same result.

if (firstName) {
    console.log(firstName);
}
else{
    console.log("firstName is kinda empty");
}


//  but if we will give truthy value

firstName= "ashutosh"
if (firstName) {
    console.log(firstName);
}
else{
    console.log("firstName is kinda empty");
}