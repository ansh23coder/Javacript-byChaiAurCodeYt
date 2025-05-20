// Date and Time in js

// 1. Date Object
// 2. Date Methods
// 3. Date Format
// 4. Date Comparison
// 5. Date and Time
// 6. Date and Time Format
// 7. Date and Time Comparison
// 8. Date and Time Methods
// 9. Date and Time Object


let mydate = new Date();
console.log(mydate); // output: 2023-10-01T12:00:00.000Z
console.log(mydate.toString()); // output: Sun Oct 01 2023 12:00:00 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()); // output: Sun Oct 01 2023
console.log(mydate.toTimeString()); // output: 12:00:00 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString()); // output: 10/1/2023, 12:00:00 PM
console.log(mydate.toLocaleDateString()); // output: 10/1/2023
console.log(mydate.toLocaleTimeString()); // output: 12:00:00 PM
console.log(mydate.toISOString()); // output: 2023-10-01T06:30:00.000Z
console.log(mydate.toUTCString()); // output: Sun, 01 Oct 2023 06:30:00 GMT
console.log(mydate.getTime()); // output: 1696145400000
console.log(mydate.getFullYear()); // output: 2023
console.log(mydate.getMonth()); // output: 9
console.log(mydate.getDate()); // output: 1
console.log(mydate.getDay()); // output: 0
console.log(mydate.getHours()); // output: 12
console.log(mydate.getMinutes()); // output: 0
console.log(mydate.getSeconds()); // output: 0
console.log(mydate.getMilliseconds()); // output: 0
console.log(mydate.getTimezoneOffset()); // output: -330
/*
2025-05-20T09:32:07.940Z
Tue May 20 2025 15:02:07 GMT+0530 (India Standard Time)
Tue May 20 2025
15:02:07 GMT+0530 (India Standard Time)
20/5/2025, 3:02:07 pm
20/5/2025
3:02:07 pm
2025-05-20T09:32:07.940Z
Tue, 20 May 2025 09:32:07 GMT
1747733527940
2025
4
20
2
15
2
7
940
-330
*/

console.log(typeof mydate);
// object
console.log(mydate instanceof Date); // output: true


// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);
// // 2023-01-22T18:30:00.000Z
// console.log(myCreatedDate.toString());
// // Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate);
// // 2023-01-22T18:30:00.000Z
// console.log(myCreatedDate.toLocaleString());
// // 23/1/2023, 5:03:00 am


let myCreatedDate = new Date("2025-02-23") // 23/2/2025, 5:30:00 am
let myCreatedDate1 = new Date("01-14-2023") // 14/1/2023, 5:30:00 am
console.log(myCreatedDate);
// 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toLocaleString());
// 23/2/2025, 5:30:00 am


let myTimeStamp = Date.now()
console.log(myTimeStamp);
// 1747734212463
console.log(myCreatedDate1.getTime);
// [Function: getTime]
console.log(Date.now());
// 1747734212463

// console.log(Date.now()/1000); // famous interview question
// -> 
console.log(Math.floor(Date.now() / 1000)); // 1747734212


// ******* More Methods *******
let newdate = new Date()
console.log(newdate.getMonth() + 1);
// 4 => 4 + 1 => 5
console.log(newdate.getDate());
// 20
console.log(newdate.getDay());
// 2
console.log(newdate.getFullYear());
// 2025
console.log(newdate.getHours());
// 15
console.log(newdate.getMinutes());
// 21
console.log(newdate.getSeconds());
// 9


// format ko customize karne ke liye

console.log(newdate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'UTC',
    timeZoneName: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
}));
// Tuesday, 20 May 2025 at 09:55:24 am UTC