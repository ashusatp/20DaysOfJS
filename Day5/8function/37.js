// ========== functions ========

function login(username , password){
    console.log(`${username},loged in succesfully`);
    console.log(password);
}
login("Ashu", "secret");
login("ASHUTOSH");

console.log("\n");


// ========== second example ===========
function uppercase(str){
    console.log(str.toUpperCase());
}

uppercase("javascript")
console.log("\n");

// ========= returnFromString ==========
function upper(str){
    return str.toUpperCase();
}

const result= upper("ashutosh");
console.log(result);