// Task 1 — Student Result Analyzer

// let name = prompt("Enter your name: ");
// let dept = prompt("Enter your department: ");
// let subjects = [];
// for(let i=0;i<5;i++){
//     subjects[i] = Number(prompt(`Enter subject ${i+1} mark: `));
// }

// function studentResult(name,dept,subjects){
//     console.log("Name: ",name);
//     console.log("Department: ",dept);
    
//     let totalMarks = 0;
//     for(let i=0;i<subjects.length;i++){
//         totalMarks+=subjects[i];
//     }
//     console.log("Total Marks: ",totalMarks);

//     let average = totalMarks / subjects.length;
//     console.log("Average Mark: ",average);

//     if(average>=50){ 
//         console.log("Pass");
//     }
//     else{
//         console.log("Fail");
//     }
//     if(90<=average && average<=100){
//         console.log("Grade: A");
//     }
//     else if(75<=average && average<90){
//         console.log("Grade: B");
//     }
//     else if(60<=average && average<75){
//         console.log("Grade: C");
//     }
//     else if(50<=average && average<60){
//         console.log("Grade: D");
//     }
//     else{
//         console.log("Fail");
//     }
// }
// studentResult(name,dept,subjects)

// ----------------------------------------------------------------------
// Task 2 — Employee Salary Calculator

// let employee = {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// };
// function calculateSalary(employee){
//     console.log("Basic Salary: ",employee.salary);
//     let bonus = 0;
//     if(employee.experience>=2){
//         bonus = employee.salary * 0.1;
//     }
//     else{
//         bonus = employee.salary * 0.15;
//     }
//     let finalSalary = employee.salary + bonus;
//     console.log("Final Salary: ", finalSalary);
// }
// calculateSalary(employee);

// -----------------------------------------------------------------------
// Task 3 — Product Filter System

// let products = [
//     {
//         name: "Laptop",
//         price: 55000,
//         category: "electronics"
//     },
//     {
//         name: "Mouse",
//         price: 800,
//         category: "electronics"
//     },
//     {
//         name: "Shirt",
//         price: 1200,
//         category: "fashion"
//     },
//     {
//         name: "Shoes",
//         price: 2500,
//         category: "fashion"
//     },
//     {
//         name: "Phone",
//         price: 30000,
//         category: "electronics"
//     }
// ];

// let filter1 = products.filter((c,i,t) => {
//     return c.price >= 2000;
// });
// console.log(filter1);

// let filter2 = products.filter((c,i,t) => {
//     return c.category == "electronics"
// });
// console.log(filter2);

// let find = products.find((c,i,t) => {
//     return c.price <= 1000;
// });
// console.log(find);

// let total = products.reduce((acc,c,i,t) => {
//     return c.price + acc;
// },0);
// console.log(total);

// let some = products.some((c,i,t) => {
//     return c.price > 50000; 
// });
// console.log(some);

// let every = products.every((c,i,t) => {
//     return c.price > 500;
// })
// console.log(every);

// ----------------------------------------------------------------
// Task 4 — Employee Management

// let employees = [
//     {
//         id: 101,
//         name: "Kavin",
//         role: "Frontend Developer",
//         salary: 40000
//     },
//     {
//         id: 102,
//         name: "Raju",
//         role: "Backend Developer",
//         salary: 50000
//     },
//     {
//         id: 103,
//         name: "Santhosh",
//         role: "Fullstack Developer",
//         salary: 60000
//     },
//     {
//         id: 104,
//         name: "Balaji",
//         role: "HR Executive",
//         salary: 30000
//     },
//     {
//         id: 105,
//         name: "Surya",
//         role: "UI/UX Designer",
//         salary: 45000
//     },
//     {
//         id: 106,
//         name: "Manoj",
//         role: "Devops Engineer",
//         salary: 55000
//     },
// ];

// let display = employees.map((c,i,t) => {
//     return c.name;
// });
// console.log(display)

// let filter = employees.filter((c,i,t) => {
//     return c.salary > 40000
// });
// console.log(filter);

// let findEmployee = employees.find((c,i,t) =>{
//     return c.id === 103;
// });
// console.log(findEmployee);

// let totalSalary = employees.reduce((acc,c,i,t) => {
//     return c.salary + acc;
// },0);
// console.log(totalSalary);

// let sortSalary = employees.sort((a,b) => {
//     return b.salary-a.salary;
// });
// // console.log(sortSalary);

// let highestSalary = sortSalary[0];
// console.log(highestSalary);

// let newArray = employees.map((c,i,t) => {
//     return c.name;
// });
// console.log(newArray);

// --------------------------------------------------------------------------
// Task 5 — Shopping Cart

// let cart = [
//     { 
//         name: "Laptop", 
//         price: 50000, 
//         quantity: 1 
//     },
//     { 
//         name: "Mouse", 
//         price: 1000, 
//         quantity: 2 
//     },
//     { 
//         name: "Keyboard", 
//         price: 2000, 
//         quantity: 1 
//     }
// ];

// function calculateCart(cart){
//     let total = cart.reduce((acc,c,i,t) => {
//         return c.price * c.quantity + acc;
//     },0);
//     console.log("Total Cart Value:",total);

//     let finalPay = 0;
//     let discount = 0;
//     if(total>50000){
//         discount = total * 0.1;
//         finalPay = total - discount;
//     }
//     console.log("Discount:",discount);
    
//     console.log("Final Payment:",finalPay);
// }
// calculateCart(cart);

// ------------------------------------------------------------------------------
// Task 6 — Student Search System

// let students = [
//     { 
//         name: "Arun", 
//         age: 21, 
//         mark: 85 
//     },
//     { 
//         name: "Priya", 
//         age: 22, 
//         mark: 92 
//     },
//     { 
//         name: "Karthi",
//         age: 20, 
//         mark: 67 
//     },
//     { 
//         name: "Dinesh", 
//         age: 23, 
//         mark: 45 
//     }
// ];

// let display = students.map((c,i,t) => {
//     return c.name;
// });
// console.log(display);

// let filter = students.filter((c,i,t) => {
//     return c.mark > 80;
// });
// console.log(filter);

// let find = students.find((c,i,t) => {
//     return c.name === "Priya";
// })
// console.log(find);

// let totalMarks = students.reduce((acc,c,i,t) => {
//     return c.mark + acc;
// },0);
// let average = totalMarks / students.length;
// console.log(average);

// let checkFail = students.some((c,i,t) => {
//     return c.mark < 50;
// })
// console.log(checkFail);

// let checkAbove = students.every((c,i,t) =>{
//     return c.mark > 40;
// })
// console.log(checkAbove);

// let sortMarks = students.sort((a,b) =>{
//     return a.mark - b.mark;
// });
// console.log(sortMarks);

// ---------------------------------------------------------------------------
// Task 7 — Array Transformation Challenge

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// let newArray = numbers.map((c,i,t) => {
//     return c * 2;
// });
// console.log(newArray);

// let even = numbers.filter((c,i,t) => {
//     return c % 2 == 0;
// })
// console.log(even);

// let filter = numbers.filter((c,i,t) => {
//     return c > 15;
// })
// console.log(filter);

// let find = numbers.find((c,i,t) => {
//     return c > 20;
// })
// console.log(find);

// let total = numbers.reduce((acc,c,i,t) => {
//     return c + acc;
// },0)
// console.log(total);

// let some = numbers.some((c,i,t) => {
//     return c > 40;
// })
// console.log(some);

// let every = numbers.every((c,i,t) => {
//     return c >= 0 ;
// })
// console.log(every);

// let sort = numbers.sort((a,b) => {
//     return b - a;
// })
// console.log(sort);

// ------------------------------------------------------------------------
// Task 8 — String Analyzer

// let string = prompt("Enter a sentence:");

// console.log(string.length);
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
// console.log(string.includes("JavaScript"));
// console.log(string.slice(0,1));
// console.log(string.slice(-1));

// let words = string.split(" ");
// console.log(words.length);

// console.log(string.replace("JavaScript","Python"));
// console.log(string.split());

// -------------------------------------------------------------------------
// Final Task - Employee Dashboard

// let employees = [
//     {
//         id: 101,
//         name: "Arun",
//         department: "IT",
//         salary: 45000,
//         experience: 2
//     },
//     {
//         id: 102,
//         name: "Priya",
//         department: "HR",
//         salary: 50000,
//         experience: 4
//     },
//     {
//         id: 103,
//         name: "Karthi",
//         department: "IT",
//         salary: 65000,
//         experience: 6
//     }
// ];

// let display = employees.map((c,i,t) => {
//     return c
// });
// console.log(display);

// let find = employees.find((c,i,t) => {
//     return c.name === "Karthi";
// })
// console.log(find);

// let filter = employees.filter((c,i,t) => {
//     return c.department==="IT";
// })
// console.log(filter);

// let filterSalary = employees.filter((c,i,t) => {
//     return c.salary > 50000;
// })
// console.log(filterSalary);

// let totalSalary = employees.reduce((acc,c,i,t) => {
//     return c.salary + acc;
// },0);
// console.log(totalSalary);

// let highestSalary = employees.reduce((acc,c,i,t) => {
//     return c.salary > acc ? c.salary : acc;
// }, 0);
// console.log(highestSalary);

// let filter2 = employees.filter((c,i,t) => {
//     return c.experience > 3;
// });
// console.log(filter2);

// let sort1 = employees.sort((a,b) => {
//     return a.salary - b.salary;
// });
// console.log(sort1);

// let sort2 = employees.sort((a,b) => {
//     return b.salary - a.salary;
// });
// console.log(sort2);


// console.log("Total Employees:",employees.length);
// console.log("Total Salary:",totalSalary);
// console.log("Highest Salary:",highestSalary);
// console.log("Average Salary:",totalSalary / employees.length);

// ----------------------------------------------------------------------------------