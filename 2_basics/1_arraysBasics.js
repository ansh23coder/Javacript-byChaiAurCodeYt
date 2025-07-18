// Arrays in JavaScript

const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
console.log(arr1[1]);  // 1
console.log(arr2[3]);  // 9


const arr3 = ['a', 2, true, null, undefined];
console.log(arr3[0]);  // 'a'
console.log(arr3[2]);  // true
console.log(arr3[4]);  // undefined


const arr4 = [1, 2, 3];
console.log(arr4.length);  // 3
console.log(arr4[3]);  // undefined (index out of bounds)



const myArr = new Array(1,2,3,4,45) 
console.log(myArr); // [ 1, 2, 3, 4, 45 ]
console.log(myArr.length); // 5


// Creating an array with a specific size
const myArr2 = new Array(5); // creates an array with 5 empty slots
console.log(myArr2); // [ <5 empty items> ]


// Array methods -----------
// myArr.push(6); // adds 6 to the end of the array 
// myArr.pop(45); // removes the last element (45) from the array

myArr.unshift(0); // adds 0 to the beginning of the array
myArr.shift(); // removes the first element (0) from the array
console.log(myArr); // [ 1, 2, 3, 4, 45, 6 ]

