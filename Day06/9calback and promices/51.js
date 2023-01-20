// ============== Async await ================


function resister(){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
        
            console.log("resister end");
            resolve();
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
    await resister();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
};// this function can only be used with async function. // this async function will acts as a promise and 


// this is just a return of promices
authenticate().then(()=>{
    console.log("All set!!");
});


console.log("other application work!!");