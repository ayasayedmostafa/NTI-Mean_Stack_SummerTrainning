// // // for (var i = 1; i <= 10; i++) {
// // //     console.log(i);
// // // }
// // // ////
// // // for (var i = 2; i <= 20; i += 2) {
// // //     console.log(i);
// // // }
// // // ////
// // // var total = 0;

// // // for (var i = 1; i <= 15; i++) {
// // //     total += i;
// // // }

// // // console.log(total);
// // // ////
// // // var ticket = 1;

// // // while (ticket <= 7) {
// // //     console.log(ticket);
// // //     ticket++;
// // // }
// // // ////
// // // var countdown = 8;

// // // while (countdown >= 1) {
// // //     console.log(countdown);
// // //     countdown--;
// // // }
// // // ///
// // // var i = 1;

// // // do {
// // //     console.log(i);
// // //     i++;
// // // } while (i <= 5);
// // // //

// // // var itemsInCart = 10;

// // // while (itemsInCart < 5) {
// // //     console.log("Start shopping");
// // // } //مفيش output
// // // ////
// // // var itemsInCart = 10;

// // // do {
// // //     console.log("Start shopping");
// // // } while (itemsInCart < 5);///الكود هيتنفذ مره


// // var userName = "Ali";
// // var userAge = 22;
// // var isStudent = true;
// // var dbPrice = 10;
// // var inputPrice = "10";

// // console.log(userName, typeof userName);
// // console.log(userAge, typeof userAge);
// // console.log(isStudent, typeof isStudent);
// // console.log(dbPrice, typeof dbPrice);
// // console.log(inputPrice, typeof inputPrice);

// // console.log(dbPrice == inputPrice);
// // console.log(dbPrice === inputPrice);
// // ////////
// // var dbPrice = 10;
// // var inputPrice = "10";

// // console.log(dbPrice == inputPrice); // بيقارن القيمه فقط
// // console.log(dbPrice === inputPrice); // بيقارن القيمه والنوع
// // ////////////
// // var userName = prompt("Enter your name");

// // console.log(userName);

// // alert(`Welcome, ${userName}`);
// // //////////
// // var value = prompt("Enter quantity");

// // var a = Number(value);
// // console.log(a, typeof a);

// // var b = parseInt(value);
// // console.log(b, typeof b);

// // var c = +value;
// // console.log(c, typeof c);

// // ///////////
// // var a = 10;
// // var b = 3;

// // console.log(a + b);
// // console.log(a - b);
// // console.log(a * b);
// // console.log(a / b);
// // console.log(a % b);
// // console.log(a ** b);
// // ////
// // var age = 20;

// // if (age >= 18) {
// //     console.log("You can enter");
// // } else {
// //     console.log("Sorry, underage");
// // }
// // /////
// var grade = 85;

// if (grade >= 90) {
//     console.log("A");
// } else if (grade >= 80) {
//     console.log("B");
// } else if (grade >= 70) {
//     console.log("C");
// } else {
//     console.log("F");
// }
// /////

// var age = Number(prompt("Enter your age"));

// var result = age >= 18 ? "Adult" : "Minor";

// console.log(result);
// ////
// var day = prompt("Enter the day");

// switch (day) {
//     case "monday":
//     case "friday":
//         console.log("workday");
//         break;

//     case "Saturday":
//     case "Sunday":
//         console.log("Weekend");
//         break;

//     default:
//         console.log("Invalid day");


// }
// //
// var price = Number(prompt("Enter product price"));

// for (var i = 1; i <= 10; i++) {
//     console.log(i + " * " + price + " = " + (i * price));
// }
// ////

// var size = Number(prompt("Enter file size"));

// if (size > 0) {
//     for (var i = 1; i <= size; i++) {
//         console.log(i);
//     }
// } else {
//     console.log("invalid file size");
// }
// ////
// var start = Number(prompt("Enter start number"));
// var end = Number(prompt("Enter end number"));

// for (var i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//         console.log(i, "express");
//     } else {
//         console.log(i, "normal");
//     }
// }
// //////////
// var students = ["Ahmed", "Sara"];

// for (var i = 0; i < students.length; i++) {
//     console.log("Student " + (i + 1)  + students[i]);
// }
// //////
// var total = 0;

// for (var i = 1; i <= 5; i++) {
//     var expense = Number(prompt("Enter expense"));
//     total += expense;
// }

// var average = total / 5;

// console.log("Total =", total);
// console.log("Average =", average);
// /////
// var correctPin = "1234";
// var attempts = 0;
// var pin;

// while (attempts < 3) {
//     pin = prompt("Enter PIN");
//     attempts++;

//     if (pin === correctPin) {
//         console.log("Login successful");
//         break;
//     }
// }

// if (pin !== correctPin) {
//     console.log("Login failed");
// }
// //

// var hasAccount = true;
// var isVerified = false;


// console.log(hasAccount && isVerified);
// console.log(hasAccount || isVerified);
// console.log(!isVerified);

// if (hasAccount && isVerified) {
//     console.log("Welcome back");
// } else if (hasAccount && !isVerified) {
//     console.log("Please verify your account");
// } else {
//     console.log("Please sign up");
// }

////
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;

var total = a + b + Number(c) + d + e;

console.log(total);

if (total >= 20) {
    for (var i = 1; i <= total; i++) {
        console.log(i);
    }
} else {
    console.log("Too big to print line by line");
}
//////
var n = Number(prompt("Enter a number"));

if (n < 0) {
    console.log("Invalid number");
    alert("Invalid number");
} else {
    var factorial = 1;

    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }

    console.log(n + "! = " + factorial);
    alert(n + "! = " + factorial);
}