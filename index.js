//create multiple function in one file 

function welcomeMsg(name){
    console.log("Hello " + name + " welcome in Insurance World");
 }

 function compareUserAge(age){
    if(age >18)
    console.log("eligible for Policy");
    else
    console.log("sorry try again!! you are only  " +age + " years old" );
}

module.exports = {
    welcomeMsg:welcomeMsg,
    compareUserAge:compareUserAge
  
};
//  welcomeMsg("Tanuja");
//  compareUserAge(20);