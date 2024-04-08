## Grade Calculator

This simple JavaScript program allows users to input their marks and calculates their corresponding grades based on the input.

# How to Use
Run the program in a Node.js environment.
Enter your marks when prompted.
The program will validate the input and calculate your grade.
The calculated grade will be displayed on the console.
Features
Validates user input to ensure it is a number between 0 and 100.
Calculates the grade based on the input marks according to the following scale:
A: 80-100
B: 60-79
C: 50-59
D: 40-49
E: 0-39
# Functions
getUserMarks(mark): Validates and parses the user input marks.
getGrade(mark): Calculates the grade based on the input marks.

## Demerit Points Calculator
This JavaScript program calculates demerit points for a car's speed input by the user and determines whether the license should be suspended based on the demerit points.

# How to Use
Run the program in a Node.js environment.
Enter the car speed when prompted.
The program will calculate the demerit points based on the input speed.
If the demerit points exceed 12, the program will display "License suspended"; otherwise, it will show the calculated demerit points.

# Features
Calculates demerit points for car speed exceeding the limit of 70.
Determines whether the license should be suspended based on the demerit points.
Provides feedback to the user regarding the demerit points or license suspension.

# Functions
demeritPoints(speed): Calculates demerit points and checks if the license should be suspended based on the input speed.

## Salary Calculator
This JavaScript program calculates various components of an employee's salary, including gross salary, PAYE (Pay As You Earn) tax, NHIF (National Hospital Insurance Fund) deductions, NSSF (National Social Security Fund) deductions, and net salary based on the user's input for basic salary and benefits.

# How to Use
Run the program in a Node.js environment.
Enter the basic salary and benefits when prompted.
The program will calculate the gross salary, PAYE, NHIF deductions, NSSF deductions, and net salary based on the input values.
The calculated values will be displayed on the console.

# Features
Calculates gross salary by subtracting benefits from the basic salary.
Determines PAYE tax based on the gross salary using progressive tax rates.
Calculates NHIF deductions based on the gross salary using a predefined scale.
Calculates NSSF deductions based on the gross salary using predefined thresholds.
Calculates the net salary by subtracting PAYE, NHIF deductions, and NSSF deductions from the gross salary.
# Functions
calculateGrossSalary(): Calculates the gross salary based on the input of basic salary and benefits.
getPAYE(grossSalary): Calculates the PAYE tax based on the gross salary using progressive tax rates.
getNHIFDeductions(grossSalary): Calculates NHIF deductions based on the gross salary using a predefined scale.
getNSSFDeductions(): Calculates NSSF deductions based on the gross salary using predefined thresholds.
calculateNetSalary(PAYE, NHIFDeduction, NSSFDeductions): Calculates the net salary based on the gross salary, PAYE, NHIF deductions, and NSSF deductions

