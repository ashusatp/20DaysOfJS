// typeof operators
   let age=19
   let firstName="Ashutosh"
   console.log(typeof firstName)
   console.log(typeof age)
   console.log(typeof 22)
   console.log(typeof "Ashutosh")

// data type (Primitive data types)
   //string
   //number
   //booleans
   //undefined
   //null
   //BigInt
   //Symbol


// convert Number to string
 console.log(age + "")   // it will change 22 ----> "22"
 console.log(typeof (age + "")) //string
 age= age + ""
 console.log(typeof (age + "")) //string
        //or
let ge=15
ge= String(ge)
console.log(typeof ge) //string
 
 
 // convert String to number

 let myStr=+"34" // when we put a plus before the string it will change "34" ---> 34
 console.log(typeof myStr) //number
     // or
let ag="344"
ag= Number(ag)
console.log(typeof ag) //number