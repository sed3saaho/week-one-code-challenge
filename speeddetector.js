// Importing the prompt-sync module for synchronous input
const prompt = require("prompt-sync")({ sigint: true });

// Prompting the user to enter the car speed
const speed = prompt("Please enter car speed:");

//Function to calculate demerit points and suspension of license.
function demeritPoints(speed){
    let demeritPoints;
    speed = parseInt(speed,10);
    if (speed < 70){
        console.log("Ok")
    } else {
        demeritPoints = Math.ceil((speed-70)/5);
    }
    if (demeritPoints < 12){
       console.log(`Demerit points: ${demeritPoints}`)
    } else{
        console.log(`License suspended`);
    }
}
  
//calling the function 
demeritPoints(speed);