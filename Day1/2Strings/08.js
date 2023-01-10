//  template string
let age = 19
let firstName="Ashutosh"

// "my name is Ashutosh and my age is 19 "

let aboutMe= "my name is "+firstName+" and my age is "+age+" "
console.log(aboutMe);

//  shortcut of above code is template string
aboutMe=`my name is ${firstName} and my age is ${age} `
console.log(aboutMe);