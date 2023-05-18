// using readline coreModule

const readline = require(`readline`);
var addFun = require('./index.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


 rl.question('enter your name:', (name) => {
    rl.question('enter your age: ' , (age) => {
        addFun.welcomeMsg(name);
       // console.log(`hello , ${name}`);
        addFun.compareUserAge(age);
       rl.question(`Fill your other detail:`,(details) => {
        console.log(`${name} your detail: ${details}`);
        rl.close();
       });
      
});
    });
