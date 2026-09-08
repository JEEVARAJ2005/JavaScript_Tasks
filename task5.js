// ### Q1: What is the difference between var, let, and const?

//  var - allows redeclare, reassignment; function-scope
// let - allows only reassignment, not redeclaration; block-scope
// const - doesn't allow reassignment and redeclaration; block-scope

// ### Q2: Can you re-declare a variable with var? What about let and const?

// Yes, we can redeclare a variable with var but can't do that on let and const. Suppose if I redeclare the same variable name with let and const, it will show error like variable has already declared.

// ### Q3: What is the output of this code?

// var x = 5;
// let y = 10;
// const z = 15;
// x = 20;
// y = 25;
// z = 30;
// console.log(x, y, z); // error: can't reassign value to const variable 'z';

// ### Q4: What is the difference between declaring and initializing a variable?

// Declaring a varible is creating a variable name with datatype like var name; let age; 
// initializing the variable means assigning value to the variable like var name = "jeeva";

// ### Q5: What will be the output?

// let a;
// console.log(a); // undefined

// ### Q6: What is hoisting? Give an example.

// Hoisting in js is processing variable and function declarations before executing the code.
// before hoisting: 
// console.log(a);
// var a = 10;
// // after hoisting:
// let b = 20;
// console.log(b);

// ### Q7: What is the difference between null and undefined?

// undefined : a variable has been declared but has not been assigned a value
// null : an intentional absence of a value.

// ### Q8: What will be the output?

// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
// console.log(typeof []); // object
// console.log(typeof {}); // object

// ### Q9: What is the difference between == and ===?

// == : checks the both sides value only
// === : checks the both sides value and type

// ### Q10: What is the difference between ++i and i++?

// ++i : increment first, then return the value.
// i++ :return the current value first, then increment.

// ### Q11: What will be the output?

// let x = 10;
// let y = "5";
// console.log(x + y); //105
// console.log(x - y); //5 
// console.log(x * y); //50
// console.log(x / y); //2

// ### Q12: What are logical operators? Explain with examples.

// Logical operators used to checks the condition and returns true or false. 
// Logical operators like &&, ||, !
// Example:
// console.log(5>2 && 8>=7);
// console.log(6<7 || 4<=2);
// console.log(!(5>3));

// ### Q13: What will be the output?

// console.log(5 > 3 && 10 > 5);  // true
// console.log(5 > 10 || 10 > 5); // true
// console.log(!(5 > 3)); // false

// ### Q14: What is the ternary operator? Give an example.

// Ternary operator is a single line declaration to perform simple if-else condition.
// let a = 5;
// let b = 4;
// console.log(a>b ? "A is greater" : "B is greater");

// ### Q15: What is the difference between implicit and explicit type casting?

// Implicit Type Casting means automatically convert one datatype into another type by the compiler or interpreter when needed.
// Explicit type casting means manually the programmer convert one type to another type using build-in functions.

// ### Q16: What will be the output?

// console.log(Number("123")); // 123
// console.log(Number("hello")); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Boolean(0)); // false
// console.log(Boolean("hello")); // true

// ### Q17: What is NaN? Give an example.

// NaN Not a Number occurs when you convert string to number.
// console.log(Number("hello")); // NaN

// ### Q18: What is the difference between if-else and switch?

// if-else fisrt check the condition if its true then will execute if statement. Otherwise it will execute else part.
// switch is used to comparing one value to multiple fixed cases.

// ### Q19: What will be the output?

// let age = 20;
// if(age >= 18) {
//     console.log("Adult"); 
// } else {
//     console.log("Minor");
// }
// Output : Adult

// ### Q20: What is nested if? Give an example.

// Nested if : if else inside containing another if else is called nested if.
// let age = 19;
// let voterId = false;
// if(age>=18){
//     if(voterId){
//         console.log("Eligible to vote");
//     }
//     else{
//         console.log("Not Eligible to vote");
//     }
// }
// else{
//     console.log("Not eligible to vote");
// }

// ### Q21: Write a program to check if a number is even or odd using ternary operator.

// let number = 12;
// console.log(number%2==0 ? "even" : "odd");

// ### Q22: What is the difference between while and do-while?

// while is an entry controlled loop. First it will checks the condition if its true then will execute the while loop statement.
// do-while loop executes the body at least once,whether the condition is initially true or false and finally it will checks the condition.

// ### Q23: What will be the output?

// for(let i = 1; i <= 5; i++) {
//     console.log(i); 
// }
// 1
// 2
// 3
// 4
// 5  

// ### Q24: What is the difference between for-of and for-in?

// for-of is used to iterate values of string and arrays.
// for-in is used to iterate objects keys and values.

// ### Q25: Write a program to find sum of numbers from 1 to 100.

// var sum = 0
// for(let i=1;i<=100;i++){
//     sum += i;
// }
// console.log(sum);

// ### Q26: What is the difference between slice and splice?

// slice is used to returns part of array. Does not modify the original array.
// splice is used to add,remove and replace elements.

// ### Q27: What will be the output?

// let arr = [1, 2, 3];
// arr.push(4); // 1,2,3,4
// arr.pop(); // 1,2,3
// arr.unshift(0); // 0,1,2,3
// arr.shift(); // 1,2,3
// console.log(arr); // 1,2,3

// ### Q28: What is the difference between function declaration and function expression?

// Function declarations can be called before they appear in the code because they are hoisted.
// greet();
// function greet() {
//     console.log("Hello");
// }

// Function expressions cannot be used before the variable has been initialized.
// let greet = function() {
//     console.log("Hello");
// };

// ### Q29: What is an arrow function? Give an example.

// An arrow function is a shorter syntax for writing functions without using the function keyword.
// let add = (a,b) => {
//     return a+b;
// }
// console.log(add(10,20));

// ### Q30: What will be the output?

// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message); // Hello

