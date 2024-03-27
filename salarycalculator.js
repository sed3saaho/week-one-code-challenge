function calculateNetSalary(basicsalary,benefits){
const NHIF_PERCENTAGE = 0.017;
const NSSF_PERCENTAGE = 0.06;

const grossSalary = basicsalary + benefits;

const nhifDedutions = grossSalary * NHIF_PERCENTAGE;

const nssfDeductions = basicsalary * NSSF_PERCENTAGE;

const totalDeductions = nhifDedutions + nssfDeductions;

let payee;
let running = true;

if (basicsalary <= 12298){
    payee = 0;
}
else if (basicsalary >= 12299 && basicsalary <= 23885){
    payee = 0.1 * (basicsalary - 12298);
}
else if (basicsalary >= 23885) {
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
}

const netsalary = grossSalary - totalDeductions - payee;

return {
    grossSalary: grossSalary,
    NHIFDeductions: nhifDedutions,
    NSSFDeductions: nssfDeductions,
    payee: payee,
    netSalary: netsalary
};
}

const inputbasicsalary =window.prompt("please input your basicsalary");
const inputbenefits = window.prompt("please input your benefits");



const basicsalary = 50000;
const benefits = 10000;
const salarydetails = calculateNetSalary(basicsalary, benefits);
console.log("Gross Salary: ", salarydetails.grossSalary);
console.log("NHIF Deductions: ", salarydetails.NHIFDeductions);
console.log("NSSF Deductions: ", salarydetails.NSSFDeductions);
console.log("PAYEE(Tax): ", salarydetails.payee);
console.log("Net Salary: ", salarydetails.netSalary);