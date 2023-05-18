

const fs = require(`fs`);   //fs module to write on file
const readline = require(`readline`);
var addFun = require('./index.js');

const saveuserDetailToFile = (name,age,details) => {
    fs.writeFile(`userdetail.txt` ,` Data successfully write to file 
    name: ${name}
    age: ${age}
    address: ${details}
    `
    , err => {
        if(err){
            console.log('error occured  when writing to file');
        }
    });
}
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
        saveuserDetailToFile(name,age,details);
       });
      
});
    });
