// =============== callback ===========

/* 
1. resister
2. send welcome email
3. login
4. get user data
5. Display user data
*/


// =============== delay function ==================
function waitForThreeSeconds(){
    let ms = 3000 + new Date().getTime();
    while(new Date()< ms){};
} //it will delay our code for 3 sec
// =============== delay function end ==============


function resister(){
    waitForThreeSeconds();  // calling delay function in it to delay this function
    console.log("resister end");
};
function sendEmail(){
    waitForThreeSeconds();  // calling delay function in it to delay this function
    console.log("Email end");
};
function login(){
    waitForThreeSeconds();  // calling delay function in it to delay this function
    console.log("login end");
};
function getUserData(){
    waitForThreeSeconds();  // calling delay function in it to delay this function
    console.log("got user data");
};
function displauUserData(){
    console.log("user data displayed");
};


// calling of functions
resister();
sendEmail();
login();
getUserData();
displauUserData();

console.log("other application work!!");