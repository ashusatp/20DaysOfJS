// While loop in array

const fruits=["apple","mangoes", "grapes", "banana"];
const fruits2=[];
let i=0;
while(i<fruits.length){
    console.log(fruits[i].toUpperCase());
    i++;
}

console.log("\n");

// ========= for of loop in array ===========
for(let fruit of fruits){
    console.log(fruit);
}
console.log("\n");

// example:-
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
    
}
console.log(fruits2);
console.log("\n");

// ========= for in loop in array ============
        //basically it will give index
for( let fru in fruits){
    console.log("Element at",fru,"th index is: ",fruits[fru]);
}