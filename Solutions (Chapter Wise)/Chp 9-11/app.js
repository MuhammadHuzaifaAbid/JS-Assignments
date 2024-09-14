//Q1

let city = prompt("Enter your city: ");

city = city.toLowerCase(city);

if(city=="karachi"){
    alert("Welcome to city of lights");
}

//Q2

let gender = prompt("Enter your gender: ");

gender = gender.toLowerCase(gender);

if(gender=="male"){
    alert("Good Morning Sir");
}
else{
    alert("Good Morning Ma'am");
}

//Q3

let signalColor = prompt("Enter the color of the signal: ");

signalColor = signalColor.toLowerCase(signalColor);

if(signalColor=="red"){
    alert("Must Stop");
}
else if(signalColor=="yellow"){
    alert("Ready to move");
}
else{
    alert("Move now");
}

//Q4

let remainingFuel = prompt("Enter the remaining fuel in litres: ");

if(remainingFuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("Enough fuel to travel");
}

//Q5
var a = 4;
if (++a === 5){ 
    alert("given condition for variable a is true");
}//true

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
} //false

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}//condition 2 & 4 is true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}//true

if (true){
    alert("True");
}
if (false){
    alert("False");
} //true

if("car" < "cat"){
    alert("car is smaller than cat");
}//true

//Q6

let obtainedMarks = prompt("Enter your obtained marks:");
let totalMarks = prompt("Enter your total marks:");
let percenatge = (obtainedMarks/totalMarks)*100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percenatge + "% <br>");

if(percenatge >= 80){
    document.write("Grade: A-one <br> Remarks: Excellent");
}
else if(percenatge >= 70 && percenatge <= 79){
    document.write("Grade: A <br> Remarks: Good");
}
else if(percenatge >= 60 && percenatge <=69){
    document.write("Grade: B <br> Remarks: You need to improve");
}
else{
    document.write("Grade: Fail <br> Remarks: Sorry");
}

//Q7

let guessNumber = 7;
let userGuessNumber = prompt("Guess the secret number from 1 to 10: ");

if(userGuessNumber == guessNumber){
    alert("Bingo! Correct answer");
}
else{
    alert("Close enough to the correct answer");
}

//Q8

let userNumber = prompt("Enter your number: ");

if(userNumber%3 == 0){
    alert("It is divisible by 3");
}
else{
    alert("It is not divisible by 3");
}

//Q9

let userNumber1 = prompt("Enter your number: ");

if(userNumber1%2 == 0){
    alert(userNumber1 + " is an even number");
}
else{
    alert(userNumber1 + " is an odd number");
}

//Q10

let temp = prompt("Enter temperature: ");

if(temp > 40){
    alert("It is too hot outside.");
}
else if( temp > 30 && temp <= 40){
    alert("The Weather today is Normal.");
}
else if( temp > 20 && temp <= 30){
    alert("Today's Weather is cool.");
}
else{
    alert("OMG! Today's weather is so cool.");
}

//Q11

let operand1 = prompt("Enter first number:");
operand1 = parseInt(operand1);
let operand2 = prompt("Enter second number:");
operand2 = parseInt(operand2);
let operation = prompt("Enter number to perfom that operation: \n 1. + \n 2. - \n 3. * \n 4. / \n 5. %");

if(operation == 1){
    let result = operand1 + operand2;
    alert(operand1 + " + " + operand2 + " = " + result);
}
else if(operation == 2){
    let result = operand1 - operand2;
    alert(operand1 + " - " + operand2 + " = " + result);
}
else if(operation == 3){
    let result = operand1 * operand2;
    alert(operand1 + " * " + operand2 + " = " + result);
}
else if(operation == 4){
    let result = operand1 / operand2;
    alert(operand1 + " / " + operand2 + " = " + result);
}
else if(operation == 5){
    let result = operand1 % operand2;
    alert(operand1 + " % " + operand2 + " = " + result);
}