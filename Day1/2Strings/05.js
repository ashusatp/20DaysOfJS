//  string indexing

let firstName = "ashutosh";

//  a  s  h  u  t  o  s  h
//  0  1  2  3  4  5  6  7


console.log(firstName[3]);

//  length of string
//  firstName.length

console.log(firstName.length)
// spaces are also counted in length of the string. if we are adding spaces then the length of the string will increase.

//  last index : length-1
console.log(firstName[firstName.length-1])
//  for printing second last : length-2
console.log(firstName[firstName.length-2])



//  ****** some important methords of string ***
// trim()               --->      it is use to trim the spaces in   the string, string is imutable means it reqired some variable declaration, to store the newString
// toUpperCase()  ---> it will change the alphabets to uppercase, it is imutable   
// toLowercase()
// slice() ---> use to remove some alphabets in our present string


// *********************trim()********************

let secondName="   harshit   "
console.log(secondName.length)
secondName.trim()    // it will never trim our string because string is imutable and it need a variable declaration to store new trimed string 
let newString=secondName.trim() 
console.log(secondName.length)
console.log(newString.length)
console.log(newString)



// insteade of declaring of two variables we can give initial variabble or string variable name to the new trimed string .

let myName="   Ashutosh   "
myName=myName.trim()
console.log(myName)
console.log(myName.length)

//  ****************toUpperCase()**********************
    firstName= firstName.toUpperCase()
    newString=newString.toUpperCase()
    secondName=secondName.toUpperCase()
    myName=myName.toUpperCase()
    console.log(firstName)
    console.log(secondName)
    console.log(myName)
    console.log(newString)

//  ****************toLowerCase()********************** similar as upperCase

// **************** slice() ************************\

    //  here me basically use start index and end index of sring, we will write it as *******stringVariableName.slice(startIndex,endIndex+1)********, and we will put this in a variable 

    let thirdName="Ashutosh"  // if I will want to print only Ashu
    let newStringOfThirdVariable1= thirdName.slice(0,3) //  it will give Ash
    let newStringOfThirdVariable2= thirdName.slice(0,4) //   it will give Ashu
    console.log(newStringOfThirdVariable1)
    console.log(newStringOfThirdVariable2)