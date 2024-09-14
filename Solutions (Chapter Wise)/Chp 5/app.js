//Q1
let num1 = 3;
let num2 = 5;

let sum = num1 + num2;
document.write("sum of "+ num1 + " and " + num2 + " is " + sum) ;
document.write("<br>")

//Q2
let subtraction = num1 - num2;
document.write("subtraction of " + num1 + " and " + num2 + " is " + subtraction);
document.write("<br>")

let multiplication = num1 * num2;
document.write("multiplication of " + num1 + " and " + num2 + " is " + multiplication);
document.write("<br>")

let division = num1 / num2;
document.write("division of " + num1 + " and " + num2 + " is " + division);
document.write("<br>")

let remainder = num1 % num2;
document.write("modulus of " + num1 + " and " + num2 + " is " + remainder);
document.write("<br><br>")

//Q3

let num3;
document.write("Value after variable declaration is " + num3);
document.write("<br>")

num3 = 5;
document.write("Initial Value: " + num3);
document.write("<br>");

num3++;
document.write("Value after increment is: " + num3);
document.write("<br>");

num3 = num3 + 7;
document.write("Value after addition is: " + num3);
document.write("<br>");

num3--;
document.write("Value after decrement is: " + num3);
document.write("<br>");

let result = num3 % 3;
document.write("The remainder is: " + result);
document.write("<br><br>");


//Q4
let moviePrice = 600;

totalPrice = moviePrice*5;
document.write("Total cost to buy 5 tickets to a movie is " + totalPrice + " PKR.");
document.write("<br><br>");

//Q5
let num4 = 5;
document.write("Table of " + num4 + ": <br>");
document.write(num4 + " x 1 = " + num4*1);
document.write("<br>");
document.write(num4 + " x 2 = " + num4*2);
document.write("<br>");
document.write(num4 + " x 3 = " + num4*3);
document.write("<br>");
document.write(num4 + " x 4 = " + num4*4);
document.write("<br>");
document.write(num4 + " x 5 = " + num4*5);
document.write("<br>");
document.write(num4 + " x 6 = " + num4*6);
document.write("<br>");
document.write(num4 + " x 7 = " + num4*7);
document.write("<br>");
document.write(num4 + " x 8 = " + num4*8);
document.write("<br>");
document.write(num4 + " x 9 = " + num4*9);
document.write("<br>");
document.write(num4 + " x 10 = " + num4*10);
document.write("<br><br>");

//Q6
let temp = 32;

let tempInCelsius = (temp - 32)*5/9;
let tempInFarenhite = (temp * 9/5) + 32;

document.write("Temperature in Celsius: " + tempInCelsius + " °C <br>");
document.write("Temperature in Farenhite: " + tempInFarenhite + " °F <br><br>");

//Q7

document.write("<h1>Shopping Cart</h1>");

let itemPrice1 = 650;
let itemPrice2 = 100;
let itemQauntity1 = 3;
let itemQauntity2 = 7;
let shippingCharges = 100;

let totalCost = (itemPrice1*itemQauntity1) + (itemPrice2*itemQauntity2) + shippingCharges;

document.write("Price of item 1 is " + itemPrice1 + "<br>");
document.write("Quantity of item 1 is " + itemPrice1 + "<br>");
document.write("Price of item 2 is " + itemPrice2 + "<br>");
document.write("Quantity of item 2 is " + itemPrice2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total costs of your order is " + totalCost + "<br><br>");

//Q8

document.write("<h1>Marksheet</h1>");

let obtaindedMarks = 804;
let totalMarks = 980;

let percentage = (obtaindedMarks/totalMarks)*100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtaindedMarks + "<br>");
document.write("Percentage: " + percentage + "% <br><br>");

//Q9

document.write("<h1>Currency in PKR</h1>");
let totalCurrency = 10*104.80 + 25*28;
document.write("Total Currency in PKR: " + totalCurrency + "<br><br>");

//Q10

let num5 = 10;
let result1 = num5 + 5 * 10 / 2;

document.write(result1 + "<br><br>");

//Q11

document.write("<h1>Age Calculator</h1>");

let currentYear = 2024;
let birthYear = 2001;

let userAge1 = currentYear - birthYear;
let userAge2 = currentYear - birthYear - 1;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is either " + userAge2 + " or " + userAge1 + "<br><br>");

//Q12

document.write("<h1>The Geometrizer</h1>");

let radius = 20;
let circumferenceOfCircle = 2 * 3.142 * radius;
let areaOfCircle = 3.142 * radius**2;

document.write("Radius of Circle: " + radius + "<br>" + "The circumference is:" + circumferenceOfCircle + "<br>" + "The area is: " + areaOfCircle + "<br><br>");

//Q13

document.write("<h1>The Lifetime Supply Calculator</h1>");

let favSnack = "Lays";
let currentAge = 22;
let maxAge = 54;
let perDay = 2;


document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current Age " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snack per day: " + perDay + "<br>");
document.write("You will need " + (maxAge-currentAge)*perDay + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br>");