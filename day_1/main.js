// // console.log("js is running");
// // //window.alert("ready to practise");

// // var productName="laptop";
// // var price=15000;
// // var isAvailable=true;

// // console.log(productName);
// // console.log(typeof(productName));
// // console.log(price);
// // console.log(typeof(price));
// // console.log(isAvailable);
// // console.log(typeof(isAvailable));
// // document.getElementById("maintitle").textContent="price time";

// // var city="cairo";
// // var country="egypt";

// // console.log(city+","+country)
// // console.log(`location:${city}-${country}`)

// // var itemPrice=120;
// // var quantity=3;
// // var total=itemPrice*quantity;

// // var deferance=400-total;
// // console.log(total);
// // console.log(deferance);
// // console.log(itemPrice*quantity);
// // console.log(itemPrice/quantity);
// // console.log(itemPrice%quantity);
// // console.log(2**quantity);
// // /////////////////////////////
// // // var favorite=prompt("enter your favorite color");
// // // console.log(`your favorite color is&{favorite}`)

// // var score=20;
// // var textScore="20";
// // console.log(score==textScore);//true بيقارن الفيمه فقط
// // console.log(score===textScore);// false  بيقارن القيمه +نوع البيانات 

// // // var numOfPieces=prompt("enter number");
// // // console.log(typeof(Number(numOfPieces)));
// // // console.log(typeof(parseInt(numOfPieces)));
// // // console.log(typeof(+numOfPieces));


// // var fruits=["apple","banana","mango"];
// // console.log(fruits[1]);
// // fruits[2]="orange";
// // console.log(fruits);

// /////////
// // var course={
// //     title:"js",
// //     hours:30,
// //     level:"middle"

// // };
// // course.title="mean stack";
// // console.log(course.hours);
// // console.log(course);

// // var hasAccount = true;
// // var isVerified = false;

// // console.log(hasAccount && isVerified);
// // console.log(hasAccount || isVerified);
// // console.log(!isVerified);

// // var balance = 50;
// // balance += 30;
// // balance *= 2;
// // balance -= 20;
// // console.log(balance);

// // // var hotel = prompt("Enter hotel name:");
// // // var nights = prompt("Enter number of nights:");
// // // var confirmed = confirm("ls the booking confirmed?");

// // // var message = `Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${confirmed}`;

// // // alert(message);
// // // console.log(message);
// // //////
// // console.log(2+8+"0");//100
// // console.log("2"+8+0);//280
// // console.log(2+"8"+0)//280


// // أ) city2 أخدت قيمة city1، وبعد كده غيرنا city2 بس
// // // عشان كده city1 فضلت Alex و city2 بقت Giza

// // var city1 = "Alex";
// // var city2 = city1;

// // city2 = "Giza";

// // console.log(city1, city2);


// // // ب) car2 و car1 بيشاوروا على نفس الـobject
// // // عشان كده لما غيرنا brand في car2 اتغير في car1 كمان

// // var car1 = { brand: "Toyota" };
// // var car2 = car1;

// // car2.brand = "Honda";

// // console.log(car1, car2);


// // // ج) هنا عملنا object جديد باستخدام Object.assign
// // // عشان أي تعديل في car2 ما يأثرش على car1

// // var car1 = { brand: "Toyota" };
// // var car2 = Object.assign({}, car1);

// // car2.brand = "Honda";

// // console.log(car1, car2);

// // var mixedBag = ["Hello", 10, true, null, undefined, {name: "Aya"}, [1, 2, 3]];

// // console.log(typeof mixedBag[0]);
// // console.log(typeof mixedBag[1]);
// // console.log(typeof mixedBag[2]);
// // console.log(typeof mixedBag[3]); // null بتطلع object بسبب خطأ قديم في JavaScript
// // console.log(typeof mixedBag[4]);
// // console.log(typeof mixedBag[5]);
// // console.log(typeof mixedBag[6]);
// // /////////////
// // // var customerName = prompt("Enter customer name:");
// // // var orderPrice = Number(prompt("Enter order price:"));
// // // var paymentDone = confirm("Is the payment done?");

// // // var message = `Customer: ${customerName}, Price: ${orderPrice}, Paid: ${paymentDone}`;

// // // console.log(message);
// // // alert(message);

// // // document.getElementById("maintitle").innerText = message;
// // /////////////
// // var num1 = Number(prompt("Enter first number:"));
// // var num2 = Number(prompt("Enter second number:"));

// // console.log(`${num1} + ${num2} = ${num1 + num2}`);
// // console.log(`${num1} - ${num2} = ${num1 - num2}`);
// // console.log(`${num1} * ${num2} = ${num1 * num2}`);
// // console.log(`${num1} / ${num2} = ${num1 / num2}`);
// // console.log(`${num1} % ${num2} = ${num1 % num2}`);
// // console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
// // /////////////////

// var a = 40;
// var b = 50;
// var c = Number("60");
// var d = 30;
// var e = 30;

// console.log(a + b + c + d + e);
// //cكانت عباره عن string علشان كده كان بيحصل concatination الحل اننا نحولها لرقم 
// /////////////
// var a = "15";
// var b = 15;
// var c = null;
// var d;
// var e = [15];
// var f = { value: 15 };

// console.log(a, typeof a, a == 15, a === 15);
// console.log(b, typeof b, b == 15, b === 15);
// console.log(c, typeof c, c == 15, c === 15);
// console.log(d, typeof d, d == 15, d === 15);
// console.log(e, typeof e, e == 15, e === 15);
// console.log(f, typeof f, f == 15, f === 15);
/////////////////
var productName = prompt("Enter product name:");
var brand = prompt("Enter brand:");
var price = Number(prompt("Enter price:"));
var category = prompt("Enter category:");

var inStock = confirm("Is this product in stock?");

var productInfo = {
    productName: productName,
    brand: brand,
    price: price,
    category: category,
    inStock: inStock
};

var message = `Product: ${productName}, Brand: ${brand}, Price: ${price}, Category: ${category}, In Stock: ${inStock}`;

alert(message);
console.log(productInfo);

document.getElementById("result").innerText = message;

