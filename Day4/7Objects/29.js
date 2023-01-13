//  difference between dot and bracket notation 



const newObj = {
    name:"ASHU",
    age:20,
    "person hobies":["WatchingMovies","PlayinGames", "sleeping" , "listningMusic"],
}

console.log(newObj);
console.log(newObj["person hobies"]);
//  when we will use two words as a keyName in any object then to access that keyValuePair, we will have to use bracket. because we don't have any other option

//  for single word 
const key = "email"
newObj[key]="ashu1234@gmail.com";
console.log(newObj);t

