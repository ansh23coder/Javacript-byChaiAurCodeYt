const score = 400
console.log(score)
// 400

const balance = new Number(100000)
console.log(balance);
// [Number: 100000]           
console.log(balance.__proto__);
// {}
console.log(balance.__proto__ === Number.prototype);
// true
console.log(balance.toString());
// 100000
console.log(typeof balance);
// object
console.log(balance.toString().length);
// 6
console.log(balance.toFixed(2)); // must use toFixed() method
// 100000.00


const othernum1 = 23.8966 
console.log(othernum1.toPrecision(3));
// 23.9
const othernum2 = 123.8966
console.log(othernum2.toPrecision(4));
// 123.9
// if 123.8966 and precision is 3 then it will be 124


const hundreds = 1000000
console.log(hundreds.toLocaleString());
// 1,000,000 // according to US format
console.log(hundreds.toLocaleString('en-IN'));
// 10,00,000 // according to Indian format
console.log(hundreds.toLocaleString('en-US'));
// 1,000,000 // according to US format


// ********* Math **********
// Math is a built-in object in JavaScript that has properties and methods for mathematical constants and functions.
// Math is not a constructor, so you cannot use it with the new keyword.
// Math is a static object, so you cannot create instances of it.
// Math is a global object, so you can use it without importing or requiring it.

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2);// 0.7071067811865476
console.log(Math.LN2); // 0.6931471805599453 
console.log(Math.LN10);// 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.abs(-10)); // 10 // only minus values to positive
console.log(Math.sqrt(16)); // 4 // square root 
console.log(Math.cbrt(27)); // 3 // cube root
console.log(Math.pow(2, 3)); // 8 // 2^3
console.log(Math.exp(2)); // 7.38905609893065 // e^2
console.log(Math.log(10)); // 2.302585092994046 // log base e
console.log(Math.ceil(10.1)); // 11 // top value
console.log(Math.floor(10.9)); // 10 // down value
console.log(Math.round(10.5)); // 11
console.log(Math.round(10.4)); // 10
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.random()); // 0.123456789
console.log(Math.random() * 100); // 0-100
console.log(Math.floor(Math.random() * 100)); // 62

