// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'timeConversion' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts STRING s as parameter.
// */

// function timeConversion(s) {
//   // Write your code
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const s = readLine();

//     const result = timeConversion(s);

//     ws.write(result + '\n');

//     ws.end();
// }


// let s = "12:18:45PM"

// function timeConversion(s) {
//   let drnq =`${s[2]}`;
//   let dq1 = `${s[3]}`;
//   let dq2 = `${s[4]}`;
//   let dq = drnq + dq1 + dq2;
//   let sn1 = `${s[6]}`;
//   let sn2 = `${s[7]}`;
//   let sn = drnq + sn1 + sn2
//   let umumi = dq + sn
//   let startler = `${s[0]}${s[1]}`;
//   let start = parseInt(startler);
//   let cem = 12 + start;
//   let dqvs = umumi;
//   let umum = cem + dqvs;
//   return umum
// }

// console.log(timeConversion(s));

// let s = "12:18:45PM";

// function timeConversion(s) {
//   let drnq = `${s[2]}`;
//   let dq1 = `${s[3]}`;
//   let dq2 = `${s[4]}`;
//   let dq = drnq + dq1 + dq2;
//   let sn1 = `${s[6]}`;
//   let sn2 = `${s[7]}`;
//   let sn = drnq + sn1 + sn2;
//   let umumi = dq + sn;
//   let startler = `${s[0]}${s[1]}`;
//   let start = parseInt(startler);
//   if (start == 12) {
//     start = "00";
//     let cem = 12 + start;
//     let dqvs = umumi;
//     let umum = start + dqvs;
//     console.log(umum);
//     return umum;
//   } else {
//     let cem = 12 + start;
//     let dqvs = umumi;
//     let umum = cem + dqvs;
//     console.log(umum);
//     return umum;
//   }
// }
// timeConversion(s);


// const convertTime12to24 = time12h => {
//   const [time, modifier] = time12h.split(" ");

//   let [hours, minutes] = time.split(":");

//   if (hours === "12") {
//     hours = "00";
//   }
//   if (modifier === "PM") {
//     hours = parseInt(hours, 10) + 12;
//   }
//   return `${hours}:${minutes}`;
// };
// var convertedTime = convertTime12to24("12:39 AM");
// console.log(convertedTime);