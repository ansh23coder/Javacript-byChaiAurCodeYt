// Conversion to another ----------

// let score = 33
// console.log(typeof score); // number
// console.log(typeof (score)); // number

// let scoree = "34"
// console.log(typeof scoree); // string
// console.log(typeof scoree); // string



// let score1 = "33abc"
// let score2 = null
// let valueInNumber = Number(score1)
// let valueInNumberr = Number(score2)
// console.log(typeof score);
// // output: number
// console.log(typeof valueInNumber)
// // output: number
// console.log(valueInNumber);
// // output: NaN
// console.log(valueInNumberr);
// // output: 0
/*
* valueInNumber = NaN, if score = "hitesh"
* valueInNumber = 1/0, if score = true/false
* "33" => 33
* "33abcdef" => NaN
* true => 1; false => 0
*/


// let isLoggedIn = 1
// let booleanIsLongedIn = Boolean(isLoggedIn)
// console.log(booleanIsLongedIn); // 1
// console.log(typeof booleanIsLongedIn) // boolean


/*
if isloggedin = 1, boolean = true
if isLoggedIn = 0, boolean = false
if isLoggedIn = "", boolean = false
if  '' = "hitesh", boolean= true
*/


// let someNum = 45
// let stringNum = String(someNum)
// console.log(stringNum); // 45
// console.log(typeof stringNum); // string


// *************** Operations ***************
let value = 3
let negValue = -value
// console.log(negValue) // -3

// console.log(2+2); // 4 
// console.log(2-3); // -1
// console.log(2*3); // 6
// console.log(2**5); // 32
// console.log(7/2); // 3.5
// console.log(3/7); // 0.42857142857142855
// console.log(2%5); // 2
// console.log(9%2); // 1


let str1 = "Hello"
let str2 = " Anupam"
let strSum = str1 + str2
// console.log(strSum); // Hello Anupam

// console.log("1" + 3); // 13
// console.log(2 + "6"); // 26
// console.log("7"+"4"); // 74
// console.log("7" + 4 + 5); // 745
// console.log(1 + 5 + "7"); // 67
// console.log(11 + 5 * 6 - 3 + "70"); // 3870
// // 38 + "70" = 3870
// console.log(11 * 5 * 6 + 3 - 10 * 2 % 3 * "70"); // 193 // use parenthesis
// // 331 * "70" = 193


console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0


let num1, num2, num3
// num1 = num2 = num3 = 2 + 2 // -> not like this


let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101
++gameCounter;
console.log(gameCounter); //102
--gameCounter;
console.log(gameCounter); // 101
gameCounter--;
console.log(gameCounter); // 100


gameCounter += 3;
console.log(gameCounter); // 103
