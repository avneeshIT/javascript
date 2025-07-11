

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toString()); // for converting it into string

 console.log(balance.toFixed(2)); // 100.00 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); //  console => 124

const hundreds = 1000000
 console.log(hundreds.toLocaleString()); // us standard
 console.log(hundreds.toLocaleString('en-IN')); // indian number 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 console.log(Math); // obejct hai
 console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //4
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // for ramdom value between 0 and 1
console.log((Math.random()*10) + 1); //
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)