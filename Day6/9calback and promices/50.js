// ============= concept of promises ==================
//  reject


// ============ ErrorFunction ===============
function resister(){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            return reject("Error while registering.")
            console.log("resister end");
        },1000);
    });
};
// ============ ErrorFunction End ===============


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


// promicesCall syntax 
resister()
.then(sendEmail)
.then(login)
.then(getUserData)
.then(displayUserData)
//errorHandling by using .catch()
.catch((err) => {
    console.log("Error: ", err);
})

// other application work!!
// Error:  Error while registering.

console.log("other application work!!");