/*
Objective:
Learn and practice Recursion. 

Task:
Write a factorial function that takes a positive integer, N as a parameter and prints the result of N! (N factorial).

Note:
Failing to use recursion or failing to name the recursive function 'factorial' or 'Factorial', will get a score of 0.

Input Format:
A single integer, N (the argument to pass to factorial).

Constraints:
2 <= N <= 12
Submission must contain a recursive function named 'factorial'.

Output Format:
Print a single integer denoting N!.

Sample Input: 3
Sample Output: 6

Explanation:
Consider the following steps:
    1) factorial(3) = 3 x factorial(2)
    2) factorial(2) = 2 x factorial(1) 
    3) factorial(1) = 1
From steps 2 and 3, we can say factorial(2) = 2 x 1 = 2;
Then when applying the value from factorial(2) to step 1, we get factorial(3) = 3 x (2 x 1). Thus, print 6 as answer.
*/

"use strict";
const fs = require("fs");
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));
  main();
});

function readLine() {
  return inputString[currentLine++];
}

// COMPLETE THE FACTORIAL FUNCTION BELOW.
//****************************************
function factorial(n) {
  let nFactorial = 0;
  n === 1 ? (nFactorial += n * 1) : (nFactorial += n * factorial(n - 1));
  return nFactorial;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const n = parseInt(readLine(), 10);
  let result = factorial(n);
  ws.write(result + "\n");
  ws.end();
}
