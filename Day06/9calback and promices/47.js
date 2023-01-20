// =============== callback ===========

/* 
1. resister
2. send welcome email
3. login
4. get user data
5. Display user data
*/

function resister(){
    setTimeout(() => {
        console.log("resister end");
    },1000);
};
function sendEmail(){
    setTimeout(() => {
        console.log("Email end");
    },1000);
};
function login(){
    setTimeout(() => {
        console.log("login end");
    },1000);
};
function getUserData(){
    setTimeout(() => {
        console.log("got user data");
    },1000);
};
function displauUserData(){
    setTimeout(() => {
        console.log("user data displayed");
    },1000);
};


// calling of functions
resister();
sendEmail();
login();
getUserData();
displauUserData();

console.log("other application work!!"); // now this code will exicute first then other will exicute.