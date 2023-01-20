//  nested destructuring
const users=[
    {userId: 1, firstName:"ashu", gender:"male",age:"20"},
    {userId: 2, firstName:"ashutosh", gender:"male",age:"20.1"},
    {userId: 3, firstName:"satapathy", gender:"male",age:"20.2"},

];

// ************ normal destructuring ***********
// const [user1, user2, user3] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);

//************** destructuring from the object *********
const[{firstName}, ,{gender}]=users;
console.log(firstName); // it comes from 1st object
console.log(gender); // it comes from 3rd object
console.log("\n");

// give new name to the variable
const[{userId:firstUser, age }, ,{gender:thirdUser}]=users;
console.log(firstUser); 
console.log(age);
console.log(thirdUser);