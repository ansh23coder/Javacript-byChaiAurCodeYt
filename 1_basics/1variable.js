const accountId = 15154116
// not changeable - const
let accountEmail = "anupamji23@gmail.com"
var accountPassword = "123456"
accountCity = "Bhopal"
let accountState;


// accountId = 12345678 // not allowed to be change
console.log(accountId); // 15154116

accountEmail = "hc@gmail.com"
accountPassword = "212121212"
accountCity = "Bangalore" // without declaring var/let/const- u can decare any variable with value
// again changing
accountCity = "Pune"


// consolelog easy method to print all
// -> 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and function scope 
*/

/*output-
15154116
┌─────────┬────────────────┐
│ (index) │ Values         │
├─────────┼────────────────┤
│ 0       │ 15154116       │
│ 1       │ 'hc@gmail.com' │
│ 2       │ '212121212'    │
│ 3       │ 'Pune'         │
│ 4       │ undefined      │
└─────────┴────────────────┘
*/ 