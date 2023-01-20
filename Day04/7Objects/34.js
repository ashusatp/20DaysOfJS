// ============== object inside array ==============
// vey useful in real world applications

let users = [
    {userId: 1, firstName: "harsh", gender:"male"},
    {userId: 2, firstName: "ashu", gender:"male"},
    {userId: 3, firstName: "ashutosh", gender:"male"},
];

 for(let user of users){
     console.log(user);
 }
 console.log("\n");
 
 // =========== access any key ============

//  userID
 for(let user of users){
     console.log(user.userId);
 }
 console.log("\n");

// name
for(let user of users){
    console.log(user.firstName);
}
console.log("\n");

// gender
for(let user of users){
    console.log(user.gender);
}
