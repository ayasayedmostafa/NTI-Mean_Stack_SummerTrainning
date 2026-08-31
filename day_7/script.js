// // function test() {
// //     x = 10;
// // }

// // test();

// // console.log(x);
// // ///
// // // function test() {
// // //     "use strict"; 
// // //         x = 10;
// // //     }

// // // test();  //erorr
// // ///////
// function test() {
//     "use strict";

//     var localVar = "test";

//     var student = {
//         name: "Ali"
//     };

//     delete student.name;

//     console.log(student);
// }

// test();
// ///////
// console.log(x);

// var x = 10;

// console.log(x);

// ////
// sayHi();

// function sayHi() {
//     console.log("Hi");
// }
// ////
// // sayBye();

// // var sayBye = function () {
// //     console.log("Bye");
// // }; //erorr
// ///
// // console.log(a);

// // let a = 5; //erorr
// /////
// // var n = 1;

// // function demo() {
// //     console.log(n);

// //     var n = 2;

// //     console.log(n);
// // }

// // demo();

// // console.log(n);
// // /////
// // function demo() {
// //     var n;

// //     console.log(n);

// //     n = 2;

// //     console.log(n);
// // }
// // ////
// // function test() {
// //     if (true) {
// //         var x = 10;
// //     }

// //     console.log(x);
// // }

// // test();
// ////
// function test() {
//     if (true) {
//         let x = 10;
//         const y = 20;

//         console.log(x);
//         console.log(y);
//     }

//     // console.log(x); error
//     // console.log(y); error
// }

// test();
// ///
// const student = {
//     name: "Ali",
//     age: 20,
//     city: "Minya"
// };

// student.age = 21;
// console.log(student);
// student.grade = "A";
// console.log(student);

// delete student.city;
// console.log(student);

// try {
//     student = {
//         name: "Omar"
//     };
// } catch (error) {
//     console.log(error.message);
// }
// ////
// const nums = [1, 2, 3];

// nums.push(4);
// console.log(nums);

// nums[0] = 10;
// console.log(nums);

// // nums = [5, 6, 7]; // error
// ////
// var a;
// let b;
// // const c; // Error
// ///
// var g1 = "var global";
// let g2 = "let global";
// const g3 = "const global";

// console.log(window.g1);
// console.log(window.g2);
// console.log(window.g3);
// ///////
// const handlers = {};

// for (let i = 0; i < 3; i++) {
//     handlers["fn" + i] = function () {
//         return "index: " + i;
//     };
// }

// console.log(handlers.fn0());
// console.log(handlers.fn2());
//////////
// const welcome = (name) => `Welcome, ${name}!`;

// console.log(welcome("Ali"));
// ////
// const fullInfo = (first, last, age) =>
//     `${first} ${last} is ${age} years old`;

// console.log(fullInfo("Ali", "Hassan", 25));
// ///
// const multiply = (a, b) => a * b;

// console.log(multiply(5, 3));

// const add = (a, b) => {
//     console.log(a);
//     console.log(b);

//     return a + b;
// };

// console.log(add(5, 3));
//////
// const product = {
//     title: "Laptop",
//     price: 15000,
//     inStock: true,
//     brand: "Dell"
// };

// const { title, price, inStock } = product;

// console.log(title);
// console.log(price);
// console.log(inStock);
// //////
// const languages = ["HTML", "CSS", "JS", "React"];

// const [first, second] = languages;

// console.log(first);
// console.log(second);
// ////
// function greet(name = "Guest", message = "Hello") {
//     return `${message}, ${name}!`;
// }

// console.log(greet("Ali", "Welcome"));
// console.log(greet("Mona"));
// console.log(greet());
//////
// function sumAll(...numbers) {
//     var sum = 0;

//     for (var number of numbers) {
//         sum += number;
//     }

//     return sum;
// }

// console.log(sumAll(1, 2, 3));
// console.log(sumAll(10, 20, 30, 40));
//////
// const arr1 = [1, 2];
// const arr2 = [3, 4, 5];

// const merged = [...arr1, ...arr2];

// console.log(merged);
// ///////
// const original = [10, 20, 30];

// const copy = [...original];

// copy.push(40);

// console.log(original);
// console.log(copy);
/////////
// const original = [10, 20, 30];

// const copy = [...original];

// copy.push(40);

// console.log(original);
// console.log(copy);
// /////////
// const values = [2, 4, 6, 8];

// function total(a, b, c, d) {
//     return a + b + c + d;
// }

// console.log(total(...values));
// ///////
// let person1 = {
//     name: "Ali",
//     child: {
//         age: 5
//     }
// };

// let person2 = person1;

// person2.name = "Omar";

// console.log(person1.name);
////////
// const original = {
//     name: "Mona",
//     details: {
//         city: "Cairo"
//     }
// };

// const copy = { ...original };

// copy.name = "Ali";
// copy.details.city = "Alex";

// console.log(original);
// console.log(copy);
///////
// const original = {
//     name: "Mona",
//     details: {
//         city: "Cairo"
//     }
// };

// const copy = structuredClone(original);

// copy.details.city = "Alex";

// console.log(original);
// console.log(copy);
// ////
// const userData = {
//     name: "Ahmed",
//     age: 26,
//     city: "Alex"
// };

// localStorage.setItem("userdata", JSON.stringify(userData));

// const data = JSON.parse(localStorage.getItem("userdata"));

// console.log(typeof data);
// console.log(data);

// localStorage.removeItem("userdata");
///////
// const APP_CONFIG = {
//     name: "My App",
//     version: "1.0.0",
//     api: {
//         baseUrl: "https://example.com",
//         timeout: 5000
//     },
//     features: []
// };

// APP_CONFIG.api.timeout = 10000;
// console.log(APP_CONFIG);

// APP_CONFIG.features.push("Dark Mode");
// console.log(APP_CONFIG);

// try {
//     APP_CONFIG = {};
// } catch (error) {
//     console.log(error.message);
// }
////////
function createCard(title, price = 0, ...tags) {
    return {
        title: title,
        price: price,
        tags: tags,
        label: `${title} - ${price} EGP`
    };
}

const card1 = createCard("Laptop", 15000, "Dell", "Electronics");
const card2 = createCard("Mouse", 500, "Wireless");

console.log(card1);
console.log(card2);
//////
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}