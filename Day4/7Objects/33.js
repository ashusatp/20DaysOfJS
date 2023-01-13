// =========== object destructuring ================

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamous: "kashmir",
    personName:"ashutosh",
    age:"20",
    lastName: "satapathy"
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName,"\n",famousSong); 

// or

const {bandName,famousSong} = band;
console.log(bandName);
console.log(famousSong);
console.log("\n");


//  but if we want to store in different variable
const{year:var1 , anotherFamous: var2} = band;
console.log(var1);
console.log(var2);
console.log("\n");

//  to make new object or SUB OBJECT from one of the object
const{personName,age,...restProps}= band;
console.log(personName);
console.log(restProps); // it will print rest of the keyValuePair
console.log("\n");
