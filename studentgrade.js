const minNum = 0;
const maxNum = 100;


function gradeForMarks(marks) {
    if (marks >79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else if (marks <marks >=0 && marks <= 39) {
        return "E";
    }
    else if (marks = "") {
        return "enter a valid number";
    }
    else {
        return "invalid input: marks must be between 0 and 100";
    }
     else if(studentmarks < minNum || studentmarks > maxNum){
        window.alert("please enter a valid number");
    }
    


}

const inputmarks =window.prompt("please input students marks etween 0 and 100");

const marks = parseint(inputmarks);

const grade = gradeForMarks(marks);

console.log("gradeForMarks: ", grade)