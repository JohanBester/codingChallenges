/*
Task:
Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers.

Input Format:

The 1st line contains an integer, N (the size of our array).
The 2nd line contains N space-separated integers describing array A's elements.

Constraints:
    1 <= N <= 1000
    1 <= Ai <= 10000, where Ai is the i-th integer in the array.

Output Format:
Print the elements of array A in reverse order as a single line of space-separated numbers.

Sample Input:
    4
    1 4 3 2

Sample Output:
    2 3 4 1
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
};

function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    // Very short answer:
    // console.log(arr.reverse().join(' '));    // using a space for the join
    // OR
    // Spread operator works great for this ...
    // console.log(...arr.reverse())

    let outputString = "";
    arr.forEach(element => {
        outputString = element + " " + outputString;
    });
    console.log(outputString);
};
