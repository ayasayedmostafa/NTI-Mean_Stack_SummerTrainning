// // // var fullName = "Ahmed Ali";

// // // console.log(fullName.length);

// // // var text = "I am learning JavaScript";
// // // console.log(text.toUpperCase());
// // // console.log(text.toLowerCase());

// // // var email = "student@nti.com";
// // // console.log(email.includes("@"));
// // // console.log(email.includes("."));

// // // var word = "JavaScript";
// // // console.log(word[0]);
// // // console.log(word[word.length - 1]);

// // // var text = "This is a bad day";
// // // var newText = text.replace("bad", "good");
// // // console.log(newText);

// // // var text = "I love coding";
// // // var words = text.split(" ");
// // // console.log(words.join("-"));

// // // var text = " nti egypt training ";
// // // var result = text.trim().toUpperCase().replace("EGYPT", "CAIRO");
// // // console.log(result);
// // //////////////

// // // var num = "45.8";

// // // num = Number(num);

// // // console.log(num);


// // // var num = 7.6;
// // // console.log(Math.round(num));
// // // console.log(Math.floor(num));
// // // console.log(Math.ceil(num));

// // // var numbers = [12, 5, 28, 9];

// // // console.log(Math.max(...numbers));
// // // console.log(Math.min(...numbers));

// // // var randomNumber = Math.floor(Math.random() * 20) + 1;
// // // console.log(randomNumber);

// // // var price = 19.4567;

// // // console.log(price.toFixed(2));

// // var numbers = [];

// // for (var i = 0; i < 5; i++) {
// //     var randomNumber = Math.floor(Math.random() * 50) + 1;
// //     numbers.push(randomNumber);
// // }

// // var largest = Math.max(...numbers);
// // var smallest = Math.min(...numbers);

// // var total = 0;

// // for (var i = 0; i < numbers.length; i++) {
// //     total += numbers[i];
// // }

// // var average = total / numbers.length;

// // console.log(numbers);
// // console.log(largest);
// // console.log(smallest);
// // console.log(average.toFixed(2));
// ///////////////////

// // for (var i = 1; i <= 20; i++) {
// //     console.log(i);
// // }


// // for (var i = 1; i <= 15; i++) {
// //     if (i % 2 !== 0) {
// //         console.log(i);
// //     }
// // }

// // var i = 10;

// // while (i >= 1) {
// //     console.log(i);
// //     i--;
// // }

// var students = ["Sara", "Omar", "Mona", "Youssef"];

// for (var student of students) {
//     console.log(student);
// }


// for (var i = 1; i <= 10; i++) {
//     if (i === 7) {
//         break;
//     }

//     console.log(i);
// }

// for (var i = 1; i <= 3; i++) {
//     for (var j = 1; j <= 3; j++) {
//         console.log(i + " * " + j + " = " + (i * j));
//     }
// }


// for (var i = 1; i <= 30; i++) {
//     if (i === 25) {
//         break;
//     }

//     if (i % 3 === 0) {
//         continue;
//     }

//     console.log(i);
// }

///////////////////

// var word = "HELLO";

// for (var i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }


// var numbers = [10, 20, 30, 40];

// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log(sum);

// var text = "JavaScript is amazing and awesome";

// var count = 0;

// for (var i = 0; i < text.length; i++) {
//     if (text[i] === "a" || text[i] === "A") {
//         count++;
//     }
// }

// console.log(count);



var grades = [70, 85, 92, 60, 77, 88];

for (var i = 0; i < grades.length; i++) {
    if (grades[i] % 2 === 0) {
        console.log(grades[i]);
    }
}



for (var i = 1; i <= 5; i++) {
    var stars = "";

    for (var j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}


var students = ["ahmed", "sara", "omar", "laila", "hassan"];

var count = 0;

for (var i = 0; i < students.length; i++) {
    var name = students[i].toUpperCase();

    if (name[0] === "A" || name[0] === "S") {
        console.log(name);
        count++;
    }
}

console.log(count);