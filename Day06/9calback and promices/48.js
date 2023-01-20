//  ============================ concept of callBack ======================================

function resister(callback){
    setTimeout(() => {
        console.log("resister end");
        callback();
    },2000);
};
function sendEmail(callback){
    setTimeout(() => {
        console.log("Email end");
        callback();
    },3000);
};
function login(callback){
    setTimeout(() => {
        console.log("login end");
        callback();
    },1000);
};
function getUserData(callback){
    setTimeout(() => {
        console.log("got user data");
        callback();
    },1000);
};
function displauUserData(callback){
    setTimeout(() => {
        console.log("user data displayed");
        callback();
    },1000);
};


// calling of functions
//  ========== callBack Hell ===================
resister(function(){
    
    sendEmail(function(){

        login(function(){
            
            getUserData(function(){

                displauUserData(function(){});
            });
        });
    });
});

console.log("other application work!!");

//  we can over come the problem of callback hell by using concept of promises.