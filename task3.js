// Task 1 — Variables

// var name = "Jeevaraj";
// let age = 21;
// let city = "Coimbatore";
// const college = "SRM";

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(college);

// name = "Raj";
// age = 22;
// city = "Theni";
// // college = "CEG";

// var name = "Gokul";
// let age = 23;
// let city = "Madurai";
// const college = "REC";

// -----------------------------------------------------------------
// Task 2 — Printing Statements

// console.log("Hello, World!");
// alert("Always Be Happy");
// let isHappy = confirm("Are you happy?");
// console.log(isHappy);
// let userName = prompt("Enter your name : ");
// document.writeln("Hii.." + userName);

// -----------------------------------------------------------------
// Task 3 — User Details

// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// let city = prompt("Enter your city:");
// let qualification = prompt("Enter your qualification:");

// console.log("Name: ", name);
// console.log("Age: ", age);
// console.log("City: ", city);
// console.log("Qualification: ", qualification);

// ----------------------------------------------------------------
// Task 4 — Find Data Types

// let a = "JavaScript";
// let b = 100;
// let c = 99.5;
// let d = true;
// let e = false;
// let f;
// let g = null;

// console.log(a, typeof(a));
// console.log(b, typeof(b));
// console.log(c, typeof(c));
// console.log(d, typeof(d));
// console.log(e, typeof(e));
// console.log(f, typeof(f));
// console.log(g, typeof(g));

// ----------------------------------------------------------------
// Task 5 — Student Array

// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[students.length - 1]);
// console.log(students.length);

// ----------------------------------------------------------------
// Task 6 - Employee Object

// let employeeDetails = {
//     name: "Jeevaraj",
//     age: 21,
//     role: "Full Stack Developer",
//     skills: ["HTML", "CSS", "JS"],
//     isWorking: true,
//     qualification: ["B.E", "M.E"]
// };

// console.log(employeeDetails.name);
// console.log(employeeDetails.age);
// console.log(employeeDetails.role);
// console.log(employeeDetails.skills[0]);
// console.log(employeeDetails.qualification[employeeDetails.qualification.length - 1]);
// console.log(employeeDetails.isWorking);

// ---------------------------------------------------------------
// Task 7 - Calculator

// let a = 20;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// ---------------------------------------------------------------
// Task 8 - Shopping Bill

// let shirt = 999;
// let pant = 1499;
// let shoes = 1999;
// let bag = 799;
// let total = shirt + pant + shoes + bag;
// console.log(total);

// ----------------------------------------------------------------
// Task 9 — Increment & Decrement

// A
// let a = 10;
// let b = a++;
// console.log(a); // 11
// console.log(b); // 10

// B
// let a = 10;
// let b = ++a;
// console.log(a); // 11
// console.log(b); // 11

//c
// let a = 10;
// let b = a--;
// console.log(a); // 9
// console.log(b); // 10

// D
// let a = 10;
// let b = --a
// console.log(a); // 9
// console.log(b); // 9

// --------------------------------------------------------------
// Task 10 - Assignment Operator Tasks

// let num = 10;
// num += 5;
// console.log(num);
// num -= 3;
// console.log(num);
// num *= 2;
// console.log(num);
// num /= 4;
// console.log(num);
// num %= 3;
// console.log(num);
// num **= 2;
// console.log(num);

// -------------------------------------------------------------
// Task 11 — Find Output - Comparison

// console.log(10 > 5);       // true
// console.log(10 < 5);       // false
// console.log(10 >= 10);     // true
// console.log(10 <= 9);      // false
// console.log(5 == "5");     // true
// console.log(5 === "5");    // false
// console.log(10 != "10");   // false
// console.log(10 !== "10");  // true

// -------------------------------------------------------------
// Task 12 — Find Output - AND

// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(false && true);  // false
// console.log(false && false); // false

// -------------------------------------------------------------
// Task 13 — Find Output - OR

// console.log(true || true);   // true
// console.log(true || false);  // true
// console.log(false || true);  // true
// console.log(false || false); // false

// --------------------------------------------------------------

// Task 14 — Find Output - NOT

// console.log(!true);       // false
// console.log(!false);      // true
// console.log(!(5 > 10));   // true
// console.log(!(10 > 5));   // false

// ---------------------------------------------------------------
// Task 15 — Find Output - Comparison

// console.log(5 == "5" && !(5 === 5) || 6 > 7);  // false
// console.log(10 > 5 && 8 < 12 || 4 === "4");    // true
// console.log(7 === 7 && 10 != "10" || 5 >= 5);  // true
// console.log(15 < 10 || 20 > 15 && 5 == "5");   // true

// ---------------------------------------------------------------
// Task 16 — Voting - Ternary Operator

// let age = 20;
// console.log(age>=18 ? "Eligible to vote" : "Not Eligible")

// ---------------------------------------------------------------
// Task 17 — Password

// let password = true;
// console.log(password === true ? "Login successful" : "Wrong password")

// -----------------------------------------------------------------------------
// Task 18 — User Introduction

// let name = "Jeeva";
// let age = "21";
// let city = "Theni";

// console.log("My name is " + name +". I am "+ age + "years old. I live in "+ city);
// console.log(`My name is ${name}. I am ${age} years old. I live in ${city}`);

// ------------------------------------------------------------------------------------------
// Task 19 — String Conversion

// let a = String(100);
// let b = String(true);
// let c = String(undefined);
// let d = String(null);
// let e = String([1,2]);

// console.log(a,typeof(a));
// console.log(b,typeof(b));
// console.log(c,typeof(c));
// console.log(d,typeof(d));
// console.log(e,typeof(e));

// -----------------------------------------------------------------------
// Task 20 — Number Conversion

// console.log(Number());            // 0
// console.log(Number(""));          // 0
// console.log(Number("123"));       // 123
// console.log(Number("a1"));        // NaN
// console.log(Number(true));        // 1
// console.log(Number(false));       // 0
// console.log(Number(undefined));   // NaN
// console.log(Number(null));        // 0

// ------------------------------------------------------------------------
// Task 21 — Boolean Conversion

// console.log(Boolean());           // false
// console.log(Boolean(""));         // false
// console.log(Boolean("hello"));    // true
// console.log(Boolean(123));        // true
// console.log(Boolean(true));       // true
// console.log(Boolean(false));      // false
// console.log(Boolean(undefined));  // false
// console.log(Boolean(null));       // false
// console.log(Boolean([]));         // true
// console.log(Boolean({}));         // true

// ------------------------------------------------------------------------
// Task 22 — Voting Eligibility

// let age = prompt("Enter your age:");
// if(age>=18){
//     console.log("You can vote");
// }
// else{
//     console.log("You can't vote");
// }

// --------------------------------------------------------------------------
// Task 23 — Positive or Negative

// let number = prompt("Enter the Integer:");
// if(number>0){
//     console.log("Positive");
// }
// else if(number<0){
//     console.log("Negative");
// }
// else{
//     console.log("Zero");
// }

// --------------------------------------------------------------------------
// Task 24 — Grade System

// let mark = prompt("Enter your mark:");

// if(90<=mark && mark<=100){
//     console.log("A Grade");
// }
// else if(80<=mark && mark<90){
//     console.log("B Grade");
// }
// else if(70<=mark && mark<80){
//     console.log("C Grade");
// }
// else if(60<=mark && mark<70){
//     console.log("D Grade");
// }
// else{
//     console.log("Fail");
// }

// ---------------------------------------------------------------------------
// Task 25 — Job Eligibility

// let age = prompt("Enter your age:");
// let height = prompt("Enter your height:");
// let weight = prompt("Enter your weight:");

// if(age>=18){
//     if(height>=160){
//         if(weight>=60){
//             console.log("Congratulations! You are selected.");
//         }
//         else{
//             console.log("Under Weight. Not selected");
//         }
//     }
//     else{
//         console.log("Lower height. Not selected");
//     }
// }
// else{
//     console.log("Under age. Not selected");
// }

// -----------------------------------------------------------------------------
// Task 26 — Traffic Light

// let signalColor = prompt("Enter the signal color:");
// switch(signalColor){
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid Color");
//         break;
// }

// ------------------------------------------------------------------------------
// Task 27 — Day

// let day = 1;
// switch(day){
//     case 1: console.log("Monday"); break;
//     case 2: console.log("Tuesday"); break; 
//     case 3: console.log("Wednesday"); break;
//     case 4: console.log("Thursday"); break;
//     case 5: console.log("Friday"); break;
//     case 6: console.log("Saturday"); break;
//     case 7: console.log("Sunday"); break;
//     default: console.log("Invalid day"); break;
// }

// -----------------------------------------------------------------------------
// Task 28 — Student Result System

let name = prompt("Enter your name:");
let age = Number(prompt("Entet your age:"));
let city = prompt("Enter your city:");

let tamil = Number(prompt("Enter your Tamil subject mark:"));
let english = Number(prompt("Enter your English subject mark:"));
let maths = Number(prompt("Enter your Maths subject mark:"));

let total = tamil + english + maths;
let avg = total / 3;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);
console.log(`Total: ${total}`);
console.log(`Average: ${avg}`);

// check result

if(total>=90){
    console.log("Grade: A");
}
else if(total>=80){
    console.log("Grade: B");
}
else if(total>=70){
    console.log("Grade: C");
}
else if(total>=60){
    console.log("Grade: D");
}
else{
    console.log("Grade: Fail");
}

// Check voting

if(age>=18){
    console.log("Voting: Eligible");
}
else{
    console.log("Voting: Not Eligible");
}




















