const name = "Anupam"
const repoCount = 50

// console.log(name + " " + repoCount + " value"); // outdated syntax
// output: Anupam 50 value

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);
// output: Hello my name is Anupam and my repo Count is 50

const gameName = new String("Anupam");
// console.log(gameName); // output: [String: 'Anupam']
console.log(gameName[0]); // output: A
console.log(typeof gameName); // output: object
console.log(gameName.length); // output: 6
console.log(gameName.charAt(0)); // output: A
console.log(gameName.indexOf("p")); // output: 2
console.log(gameName.lastIndexOf("p")); // output: 4
console.log(gameName.slice(0, 3)); // output: Anu
console.log(gameName.substring(0, 3)); // output: Anu
console.log(gameName.split("")); // output: [ 'A', 'n', 'u', 'p', 'a', 'm' ]
console.log(gameName.split("p")); // output: [ 'Anu', 'am' ]
console.log(gameName.replace("Anupam", "Anupam Singh")); // output: Anupam Singh

console.log(gameName.__proto__); // output: String {}
console.log(gameName.__proto__ === String.prototype); // output: true
console.log(gameName.__proto__.__proto__); // output: [Object: null prototype] {}
console.log(gameName.__proto__.__proto__ === Object.prototype); // output: true
console.log(gameName.__proto__.__proto__.__proto__); // output: null
console.log(gameName.toUpperCase()); // output: ANUPAM
console.log(gameName.toLowerCase()); // output: anupam



const gameName1 = new String("Anupam-sh");
const newstr = gameName1.substring(0, 4);
console.log(newstr); // output: Anup
console.log(gameName1.slice(-9, 4)); // output: Anup
console.log(gameName1.slice(0, -4)); // output: Anupa



const str = "    Anupam Sharma     ";
console.log(str); // output: "    Anupam Sharma     "
console.log(str.trim()); // output: "Anupam Sharma"
console.log(str.trimStart()); // output: "Anupam Sharma     "
console.log(str.trimEnd()); 
console.log(str.trim().length); 


const url = "https://www.mygoogleart.com";
url.replace('oog', '-'); 
console.log(url.replace('oogle', '-')); 

// check url me https hai ya nahi
const url1 = "https://www.mygoogleart.com";
console.log(url1.startsWith("https")); 
console.log(url1.endsWith(".com")); 

//->
console.log(url1.includes("mygoogleart")); 
console.log(url1.includes("mygoogleart", 5)); 
console.log(url.includes('sundar'));
// output: false
console.log(gameName1.split('-'));


/*
Hello my name is Anupam and my repo Count is 50
A
object
6
A
3
3
Anu
Anu
[ 'A', 'n', 'u', 'p', 'a', 'm' ]
[ 'Anu', 'am' ]
Anupam Singh
{}
true
[Object: null prototype] {}
true
null
ANUPAM
anupam
Anup
Anup
Anupa
    Anupam Sharma
Anupam Sharma
Anupam Sharma
    Anupam Sharma
13
https://www.myg-art.com
true
true
true
true
*/