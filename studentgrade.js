// Importing the prompt-sync module for synchronous input
const prompt = require("prompt-sync")({ sigint: true });

// Prompting the user to enter their marks
const mark = prompt("Please enter your marks:");

// Function to validate and parse user mark
function getUserMarks(mark) {
    mark = parseInt(mark); // Converting the input to a number

    // Check if the input is not a number or falls outside the range of 0 to 100
    if (isNaN(mark) || mark < 0 || mark > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return null; 
    }
    return mark; 
}

// Validate and parse the user input marks
const validMark = getUserMarks(mark);

// If the input marks are valid, calculate and display the grade
if (validMark !== null) {
    const grade = getGrade(validMark); 
    console.log(`Grade: ${grade}.`); 
}

// Function to calculate the grade based on marks
function getGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}