// 1.What is a variable in JavaScript?
// Variable in JavaScript is a storage location like container used to store the value. 

// 2.What are the three keywords used to create variables?
// var,let and const.

// 3.Write the syntax to create a variable using var.
// var a = 100

// 4.Write the syntax to create a variable using let.
// let b = 200

// 5.Write the syntax to create a variable using const.
// const c = 300

// 6.What is declaration?
// Declaration means creating a variable name.

// 7.What is initialization?
// Initialization means assigns the value to the variable.

// 8.What is reassignment?
// Once declaration and initialization done then we have to change or modify the value of the existing variable is called reassignment.

// 9.What is redeclaration?
// Once we declare the variable then again declare the same variable is called redeclaration. 

// 10.Which keyword allows redeclaration?
// var keyword allows redeclaration. 

// 11.Which keyword allows reassignment?
// Both var and let allows reassignment.

// 12.Which keyword requires initialization when declared?
//  const keyword requires initialization when declared.

// 13.Identify the declaration and initialization:
// let age = 25;
// let age is declaration and 25 is initialization.

// 14.What is the value of a?
// var a = 100;
// console.log(a);
// 100

// 15.Change the value of this variable to 200:
// let number = 100;
// number = 200

// ---------------------------------------------------------------------
// var
// 16.What will be the output?
// var a = 10;
// console.log(a);
// 10

// 17.What will be the output?
// var a = 10;
// a = 20;
// console.log(a);
// 20

// 18.What will be the output?
// var a = 10;
// var a = 30;
// console.log(a);
// 30

// 19.Write a var variable named name with the value "John".
// var name = "John" 

// 20.Create a var variable named price with the value 500.
// var price = 500

// 21.Reassign price from 500 to 1000.
// price = 1000

// 22.What will be the output?
// var x = 50;
// x = 100;
// console.log(x);
// 100

// 23.Can a var variable be reassigned?
// Yes.

// 24.Can a var variable be redeclared?
// Yes.

// 25.Write an example of var redeclaration.
// var a = 100
// var a = 200
// console.log(a)

// ---------------------------------------------------------------------------
// let
// 26.Create a let variable named age with the value 25.
// let age = 25

// 27.What will be the output?
// let age = 20;
// age = 30;
// console.log(age);
// 30

// 28.Can a let variable be reassigned?
// Yes.

// 29.Can a let variable be redeclared?
// No.

// 30.Find the error:
// let name = "John";
// let name = "David";
// error : "name" variable has already declared. 

// 31.Create a let variable called city and assign "Chennai".
// let city = "Chennai"

// 32.Change the value of city to "Salem".
// city = "Salem"

// 33.What will be the output?
// let x = 10;
// x = 50;
// console.log(x);
// 50

// 34.Write a let variable called salary with the value 25000.
// let salary = 25000

// 35.Reassign salary to 30000.
// salary = 30000

// --------------------------------------------------------------------------
// const
// 36.Create a const variable called pi with the value 3.14.
// const pi = 3.14

// 37.Can a const variable be reassigned?
// No

// 38.Can a const variable be redeclared?
// No

// 39.What is wrong with this code?
// const age;
// age = 25;
// error : Missing initialization in const declaration

// 40.What happens here?
// const price = 500;
// price = 1000;
// error : can't reassign value to const variable.

// 41.Create a const variable called country with the value "India".
// const country = "India"

// 42What will be the output?
// const x = 100;
// console.log(x);
// 100

// 43.Which keyword should you use if the value should not be reassigned?
//  const keyword. Once we assigned value to the const variable, we cant't reassigned.

// 44.What is the difference between let and const?
// let - allows reassignment but not redeclaration
// const - doesn't allow redeclaration and reassignment

// 45.What is the difference between var and const?
// var - allows redeclaration and reassignment
// const - doesn't allow redeclaration and reassignment

// --------------------------------------------------------------------------
// Printing & Console
// 46.Write JavaScript code to print Hello World using console.log().
// console.log("Hello World")

// 47.Write JavaScript code to print the number 500 using console.log().
// let number = 500
// console.log(number)

// 48.What is the purpose of console.warn()?
// console.warn() which is used to display a warning message.
// console.warn("warning")


// 49.What is the purpose of console.error()?
// console.error() is used to display an error message.
// console.error("Error")

// 50.What is the purpose of each?
// alert() - pop-up visualization
// prompt() - getting information from the user through pop-up
// confirm() - asking ok(true) or cancel(false) questions
// document.writeln() - webpage output
// console.log() - console/terminal output and less  interation compared to others.
// -------------------------------------------------------------------------
// 🔥 Practical Questions
// You can also give these as coding tasks:
// Create a variable for student name, age, and mark and print all three.
let name = "Jeevaraj"
let age = 22
let mark = 60
console.log(name)
console.log(age)
console.log(mark)

// Ask the user's name using prompt() and display it using alert().
let userName = prompt("Enter the username:")
alert(userName)

// Ask the user's age using prompt() and print it using console.log().
let userAge = prompt("Enter the age:") 
console.log(userAge)

// Ask the user a question using confirm().
let question = confirm("Are you completed the task??")
console.log(question)

// Ask the user's name and display it on the webpage using document.writeln().
document.writeln(userName)

