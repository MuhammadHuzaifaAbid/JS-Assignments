//Q1

let a = 10;
document.write("The value of a is: " + a + "<br>");
document.write("-------------------------" + "<br><br>");

++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a + "<br>");
a++;
document.write("The value of a is: " + a + "<br><br>");

--a;
document.write("The value of --a is: " + a + "<br>");
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a + "<br>");
a--;
document.write("The value of a is: " + a + "<br><br>");

//Q2

var a1 = 2, b = 1;
var result = --a1 + --b + ++b + b--; //1 + 0 + 1 + 1 =3 

document.write("a is " + a1 + "<br>");
document.write("b is " + b + "<br>");

document.write("Result is " + result);

//Q3
let userName = prompt("Enter your name:");
alert("Welcome " + userName);

//Q5
let num = prompt("Enter your number: ");
document.write("<br><br>"+ num + " x 1 = " + num*1 + "<br>");
document.write(num + " x 2 = " + num*2 + "<br>");
document.write(num + " x 3 = " + num*3 + "<br>");
document.write(num + " x 4 = " + num*4 + "<br>");
document.write(num + " x 5 = " + num*5 + "<br>");
document.write(num + " x 6 = " + num*6 + "<br>");
document.write(num + " x 7 = " + num*7 + "<br>");
document.write(num + " x 8 = " + num*8 + "<br>");
document.write(num + " x 9 = " + num*9 + "<br>");
document.write(num + " x 10 = " + num*10 + "<br><br>");

//Q6
let subject1 = prompt("Enter your first subject name:");
let subject2 = prompt("Enter your second subject name:");
let subject3 = prompt("Enter your third subject name:");

let marks1 = prompt("Enter your " + subject1 + " marks:");
let marks2 = prompt("Enter your " + subject2 + " marks:"); 
let marks3 = prompt("Enter your " + subject3 + " marks:");

let totalMarks = 100;

document.write("<b>Subject</b>" + "&nbsp;")
document.write("<b>Total Marks</b>" + "&nbsp;");
document.write("<b>Obtained Marks</b>" + "&nbsp;");
document.write("<b>Percentage</b>" + "&nbsp;<br>");

document.write(subject1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
document.write(totalMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
document.write(marks1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
document.write(marks1 + "%" + "<br>")

document.write(subject2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
document.write(totalMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
document.write(marks2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
document.write(marks2 + "% <br>")

document.write(subject3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
document.write(totalMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
document.write(marks3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
document.write(marks3 + "% <br>")

