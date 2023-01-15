// ============== (2)METHOD Async await error handling ================


function resister(){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            return reject("Error in resistration")
            console.log("resister end");
        },1000);
    });
};
function sendEmail(){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            console.log("Email end");
            resolve();
        },1000);
    });
};
function login(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("login end");
            resolve();
        },1000);
    });
};
function getUserData(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("got user data");
            resolve();
        },1000);
    });
};
function displayUserData(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("user data displayed");
            resolve();
        },1000);
    });
};


async function authenticate(){
    try{
        await resister();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    } catch(err){
            console.log(err);
            throw new Error();
    }
};// this function can only be used with async function. // this async function will acts as a promise and 


// this is just a return of promices


// ================== error handling ================
authenticate().then(()=>{
    console.log("All set!!");
}).catch((err)=>{
    console.log("Error: ",err);
});
// now it will throw to the authenticat function


// =============== error handling end ===================

console.log("other application work!!");