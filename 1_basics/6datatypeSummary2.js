// Stack (Primitive) and Heap (Non Primitive)

// **** Stack ****
let name = "anupam"
let nickname = name
nickname = "oppa"
console.log(name); // anupam
console.log(nickname); // oppa

let userOne = {
    email: "user@gmail.com",
    upiId: "512651...@upi",
}
let userTwo = userOne
userTwo.email = "anu@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
// in heap- dono ko 1 hi reference milta hai

/*
output :-
anupam
oppa
anu@gmail.com
anu@gmail.com
*/