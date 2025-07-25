// singleton
// object.create

const mySym = Symbol("key1")

// object
const jsUser = {
    name: "Anupam", 
    age: 22, 
    "full name": "Anupam Sharma",
    [mySym]: "mykey1",
    location: "Goa",
    email: "agb232@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}
// keys, value

// console.log(jsUser.email)
// console.log(jsUser)
/** 
agb232@gmail.com
{
  name: 'Anupam',
  age: 22,
  location: 'Goa',
  email: 'agb232@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Tuesday' ]
}
 */

// console.log(jsUser["email"]) // agb232@gmail.com
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
/**
agb232@gmail.com
Anupam Sharma
mykey1
 */

// changing values ---------
jsUser.name = "hitesh Sir"
Object.freeze(jsUser)
jsUser.email = "hitesh@outlook.com"
// console.log(jsUser)
/**
{
  name: 'hitesh Sir',
  age: 22,
  'full name': 'Anupam Sharma',
  location: 'Goa',
  email: 'agb232@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Tuesday' ],
  [Symbol(key1)]: 'mykey1'
}
 */

jsUser.greeting = function(){
    console.log("Good morning Sir!, How may i help you!");
}
jsUser.greetingTo = function(){
    console.log(`Good morning Sir!, ${this.name}`);
}

console.log(jsUser.greeting) // undefined
// [Function (anonymous)]
console.log(jsUser.greetingTo)