// ======== variable scope ===============

const hello = "hi";
function download(){
    console.log(hello);
}
console.log(hello);
download();

// from outside, we cant access any variable which already preasent inside any function 
// but we can access any variable which is present outside of function