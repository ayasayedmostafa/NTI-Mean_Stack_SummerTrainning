// // let car = {
// //   brand: "toyota",
// //   model: "new",
// //   year: 2020,
// //   color: "white"
// // };
// // console.log(car);

// // console.log(car.brand);
// // console.log(car["year"]);

// // car.color = "black";
// // car.price = 350000;
// // console.log(car);
// // delete car.year;
// // console.log(car.year);

// // //////////////
// // let student = {
// //   "student-name": "sara",
// //   age: 20
// // };
// // console.log(student["student-name"]);

// // let book = {
// //   title: " Habits",
// //   author: {
// //     firstName: "James",
// //     lastName: "Clr"
// //   }
// // };
// // console.log(book.author.lastName);

// // let person = { name: "Ali", age: 25, city: "Cairo" };
// // console.log(Object.keys(person));
// // console.log(Object.values(person));
// // console.log(person.hasOwnProperty("job"));


// // let settings = { theme: "dark", lang: "en" };
// // Object.freeze(settings);
// // settings.theme = "light";
// // settings.fontSize = 16;
// // console.log(settings);
// //////////////////

// let cities = ["Cairo", "Alex", "Giza", "Aswan", "Luxor"];
// console.log(cities);
// console.log(cities.length);

// // console.log(cities[0]);
// // console.log(cities[1]);
// // console.log(cities[cities.length - 1]);
// // cities.push("Mansoura");
// // console.log(cities);
// // cities.unshift("Tanta");
// // console.log(cities);

// // cities.pop();
// // console.log(cities);
// // cities.shift();
// // console.log(cities);
// // let langs = ["HTML", "CSS", "JS", "React"];
// // console.log(langs.indexOf("JS"));
// // console.log(langs.includes("Python"));


// // let items = ["pen", "book", "bag"];
// // items.forEach(function (item, index) {
// //   console.log(index, item);
// // });

// let colors = ["red", "green", "blue", "yellow"];
// for (let c of colors) {
//   if (c === "blue") {
//     break;
//   }
//   console.log(c);
// }

// let letters = ["A", "B", "C"];
// letters.push("D", "E");
// letters.shift();
// console.log(letters);
// console.log(letters.length);

///////////////////////
// let fruits = ["apple", "banana", "cherry"];
// let upperFruits = fruits.map(function (f) {
//   return f.toUpperCase();
// });
// console.log(upperFruits);
// console.log(fruits);
// //////
// let nums = [10, 55, 30, 80, 45, 90];
// let bigNums = nums.filter(function (n) {
//   return n > 50;
// });
// console.log(bigNums);

// /////
// let egyCities = ["Cairo", "Giza", "Alex", "Aswan"];
// let cityA = egyCities.find(function (c) {
//   return c[0] === "A";
// });
// let cityAIndex = egyCities.findIndex(function (c) {
//   return c[0] === "A";
// });
// console.log(cityA);
// console.log(cityAIndex);
//////////////
// let letters2 = ["a", "b", "c", "d", "e"];
// let sliced = letters2.slice(1, 4);
// console.log(sliced);
// console.log(letters2);
// //////////////
// let numbersWords = ["one", "two", "three", "four", "five"];
// let removed = numbersWords.splice(1, 2);
// console.log(removed);
// console.log(numbersWords);
// /////////////

// let unsorted = [40, 100, 1, 10, 25];
// unsorted.sort(function (a, b) {
//   return a - b;
// });
// console.log(unsorted);
// //////
// let ages = [16, 21, 17, 19];
// let hasAdult = ages.some(function (age) {
//   return age >= 18;
// });
// let allAdults = ages.every(function (age) {
//   return age >= 18;
// });
// console.log(hasAdult);
// console.log(allAdults);

// let numsToSum = [5, 10, 15, 20];
// let total = numsToSum.reduce(function (sum, current) {
//   return sum + current;
// }, 0);
// console.log(total);

//////

// let students = [
//   { name: "Omar", grade: 80 },
//   { name: "Mona", grade: 90 },
//   { name: "Ali", grade: 70 }
// ];
// for (let s of students) {
//   console.log(s.name, s.grade);
// }

// let highGrades = students.filter(function (s) {
//   return s.grade >= 80;
// });
// let namesOnly = highGrades.map(function (s) {
//   return s.name;
// });
// console.log(namesOnly);


// let products = [
//   { name: "Mouse", price: 150 },
//   { name: "Keyboard", price: 300 },
//   { name: "Monitor", price: 2500 }
// ];
// let totalPrice = products.reduce(function (sum, p) {
//   return sum + p.price;
// }, 0);
// console.log(totalPrice);
// /////
// let techList = ["js", "html", "css", "js", "react", "js"];
// let jsCount = techList.filter(function (item) {
//   return item === "js";
// }).length;
// console.log(jsCount);

/////
// let classroom = {
//   teacher: "Mr. Ahmed",
//   students: ["Sara", "Omar", "Nour", "Karim"]
// };
// console.log(classroom.teacher);
// console.log(classroom.students.length);
// console.log(classroom.students[classroom.students.length - 1]);
////////////

let catalog = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 }
];

let upperTitles = catalog.map(function (item) {
  return item.title.toUpperCase();
});
console.log(upperTitles);

let cheapItems = catalog.filter(function (item) {
  return item.price < 30;
});
console.log(cheapItems);

let catalogTotal = catalog.reduce(function (sum, item) {
  return sum + item.price;
}, 0);
console.log(catalogTotal);