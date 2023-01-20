// ============= Closure ==========

// A closure is the combination of a function  and the lexical environment with in which that function was declared.

//  closure in action that is inner function can have access to the outer function variable/parameters as well as all the global variables.

// [The return statement does not execute the inner function - function is executed only when followed by () , but rather the return statement returns the entire body of the function.]

// Laxical Scope
const outerFunction = (a) =>{
    let b = 10;
    const innerFunction = () => {
        let sum = a + b;
        console.log(`the sum of two number is ${sum}`);
    }
    // calling of inner function
    innerFunction();
};
// calling of outer function
outerFunction(5);

// ************ Closure *************
const clOutFunction = (num1)=>{
    let num2 = 5;
    const clInnerFunction = () =>{
        let clSum = num1 + num2 ;
        console.log(`the sum of two number is ${clSum}`);
    }

    return clInnerFunction;
}

let inner = clOutFunction(5);
console.log(inner); // it will print inner function 
inner(); // here inner is nothing but the inner closure function present inside the outer one. so when we call inner it will automatically calls the inner closure function.