// JavaScript Data Types

// *****1. Primitive Data Types*****:
// These are immutable and stored by value.
// - Number: Represents numeric values (e.g., 1, 3.14)
// - String: Sequence of characters (e.g., "hello")
// - Boolean: true or false
// - Undefined: A variable declared but not assigned a value
// - Null: Represents intentional absence of value
// - Symbol: Unique and immutable value (introduced in ES6)
// - BigInt: For large integers (introduced in ES2020)

let num = 42;                // Number
let str = "Hello";           // String
let bool = true;             // Boolean
let und = undefined;         // Undefined
let nul = null;              // Null
let sym = Symbol("id");      // Symbol
let bigInt = 9007199254740991n; // BigInt


// *****2. Non-Primitive (Reference) Data Types*****:
// These are mutable and stored by reference.
// - Object: Collection of key-value pairs
// - Array: Ordered list of values (special type of object)
// - Function: Callable object

// let arr = [1, 2, 3];         // Array
// let obj = { name: "Chai" };  // Object

// function greet() {           // Function
//   console.log("Good Morning Sir! I am Ready to code");
// }
// greet(); // Good Morning Sir! I am Ready to code

const heroes = ["IronMan", "Hulk", "Captain America", "Spider Man", "Black Panther", "Black Widow", "Winter Soldier", "Doctor Strange"];
let myObj = {
    name: "anupam", 
    age: 22,
}
const myfunc = function(){
    console.log("Hello!");
}


// typeof operator examples
console.log(typeof num);     // "number"
console.log(typeof str);     // "string"
console.log(typeof bool);    // "boolean"
console.log(typeof und);     // "undefined"
console.log(typeof nul);     // "object" (this is a known JS quirk)
console.log(typeof sym);     // "symbol"
console.log(typeof bigInt);  // "bigint"
console.log(typeof arr);     // "object"
console.log(typeof obj);     // "object"
console.log(typeof greet);   // "function"

// Summary:
// - Primitive types are compared by value and are immutable.
// - Non-primitive types are compared by reference and are mutable.