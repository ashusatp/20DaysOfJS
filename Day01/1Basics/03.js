//  undefineed --> after declaration of the variable, if we will not assign  any value to the variable then typeof thatVariable will give us undefined result (this is valid only for var or let ). if we  declare a variable by using const and value is not  assined to it then it will throw an error. but if we assin a value to the variable then it will work for all(let, var, and const)

let firstName;
console.log(typeof firstName);
firstName="ashutosh"
console.log(typeof firstName, firstName);



        //   const secondName;
        //   console.log(typeof secondName);




// null ---> it will give null

let myVariable= null;
console.log(myVariable);
myVariable="ashu"
console.log(myVariable, typeof myVariable);


//  bug in js ( typeof null)

console.log(typeof null);   // --> it will give us object as a result
console.log(typeof undefined); // ---> i will give undefined as a result



//  BigInt
 
    let myNumber= 123;
    console.log(myNumber);
    console.log(Number.MAX_SAFE_INTEGER); // it will give us max size of an integer

    let yourNumber = BigInt(952222222222222222222333333333333331111111) ; 
    console.log(yourNumber);

     // we can also store a small integers in the BigInt data type

    myNumber= BigInt(1234);
    let sameMyNumber= 1234n; // another methord to store value in BigInt

    // we can not mix int to the BigInt( it will throw an error)
            //   let simleint = 123;
            //   let bigint = 1234n;
            //   console.log(simleint + bigint);



