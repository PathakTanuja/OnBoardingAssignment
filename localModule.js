
console.log("local Node module  uses when  multiple function in the file");

//export one file function to another file
var addFun = require('./index.js');
console.log("display the user name with welcome note and check age:");
addFun.welcomeMsg("Ram");
addFun.compareUserAge(10);
