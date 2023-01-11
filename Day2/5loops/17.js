// break keyword ---> it will stop the execution of our loop, we will go outside of loop

       for(let i=1; i<=10; i++){
           if (i===4) {
               break;
           }
           console.log(i);
       }
       console.log("hello");




// continue keyword ----> we will return to our loop and it will skip the step.

for(let j=1; j<=10; j++){
    if (j===4) {
        continue;
    }
    console.log(j);
}
console.log("hello");