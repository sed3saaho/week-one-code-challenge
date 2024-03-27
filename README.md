## Code Challenge

# Student grade generator
(function gradeForMarks(marks) { }) here am creating a function that will help us generate the student's grades
then within the function i wil us the "if" and the "else if" statements to declare what our function needs to 
like as for example in the "if" statement we have declared our function to grade all marks above 79 as A.
const inputmarks =window.prompt("please input students marks etween 0 and 100"); > here we are prompting the user by giving him or her specific instructions on what to do , as for our case the user has to input the students marks which should range between 0 to 100
then we use the parceint function to ensure that it parses whatever string that our user will input nad convert it into 
an integer based on the contents within a string
 We also have to restrict the user to meet the conditions of our programm which is to ensure that the marks which the the user has inputed ranges between 0 to 100 which will be made possible by usng the const variable. As in our case we have "const minNum = 0;
       const maxNum = 100;"
    And we have to declare our function to alert the user whenever he or she has failed to meet the conditions of our programm , as for our case we used " else if(studentmarks < minNum || studentmarks > maxNum){
        window.alert("please enter a valid number");
    }"
    
## Speed Detector  
We first start by prompting the user to input the vehicle's speed like as for our case we have "const inputspeed =window.prompt("please input the speed of your vehicle");"
we then use the parceint function to ensure that it parse the input for speed so that if it is a string it converts it into an integer
We have to set a constant of our speed limit , we wil do this using the const variable eg "const speedlimit = 70;"
We also have to set constant of our demerit points per kilometer eg "const Demeritpointsperkm = 5;"
After which we will have to declare a function that will enable us calculate the demerit points as per the vehicles speed
        "const demeritpoints = Math.floor((speed - speedlimit)/Demeritpointsperkm);}" < Here we are tring to tell our function that for every 5km/s above our speed limit , it should give the driver one demerit point .

      "if(demeritpoints > 12){
        window.alert("licence suspended");}" < here we are telling our function to that when the demerit points of a driver exceed 12 then it should send an alert to the driver that his license is suspended
"lse{
            window.alert("points:" + demeritpoints);" < Here we are telling our function to alert the driver on his total demerit points. And this applies to those whose demerit points are below 12
            
## Net Salary Calculator
WE start by declairing a function that will help us calculate the users net Salary base on the inputs which we will ask the use to input which are : His Basic Salary and His Benefits

      "const NHIF_PERCENTAGE = 0.017;
     const NSSF_PERCENTAGE = 0.06;

       const grossSalary = basicsalary + benefits;

      const nhifDedutions = grossSalary * NHIF_PERCENTAGE;

      const nssfDeductions = basicsalary * NSSF_PERCENTAGE;

      const totalDeductions = nhifDedutions + nssfDeductions;"
What we are trying to do, is to declare some constants within the function which will help us with the calculations of
the user's net salary and as you can see there are some arithmetic operators involved in them.

     "if (basicsalary <= 12298){
    payee = 0;
    }
    else if (basicsalary >= 12299 && basicsalary <= 23885){
    payee = 0.1 * (basicsalary - 12298);
   }
      else if (basicsalary >= 23885) 
     payee = (basicsalary - 12298) * 0.1;
   }
   else if (basicsalary <=35472) {
    payee = 1158.7 + (basicsalary - 23885) * 0.15;
    }
    else if (basicsalary <= 47059) {
      payee = 2713.1 + (basicsalary - 35472) * 0.2;
   }
    else if (basicsalary <= 70913) {
    payee = 4783.6 + (basicsalary - 47059) * 0.25;
   }
   else {
   payee = 10968.6 + (basicsalary - 70913) * 0.3;
   }"
   
Now as you can see, above you there are some code there, what we are trying to do is to create the table used for calculating tax in a way javascript will be able to understand and interpret  according to how we want it to do,
and for your information at the end you will see that we are getting the accurate figures after javascript has done us the mathematics
   "const netsalary = grossSalary - totalDeductions - payee;" < here we are just trying to calculate our net salary using values from the grossSalary , totalDeductions and payee
   
        "return {
        grossSalary: grossSalary,           >here we are just telling our function what to return after 
         NHIFDeductions: nhifDedutions,       the calculations
        NSSFDeductions: nssfDeductions,
        payee: payee,
        netSalary: netsalary
        };"

As you can remember in the begining we said that we have to prompt our user to input the basic salary and the benefits
and that is actually what we are trying to do here > "
       const inputbasicsalary =window.prompt("please input your basicsalary");
      const inputbenefits = window.prompt("please input your benefits");"




