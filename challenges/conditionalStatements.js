// Given an integer, N, perform the following conditional actions:
// If N is odd, print Weird
// If N is even and in the inclusive range of  to , print Not Weird
// If N is even and in the inclusive range of  to , print Weird
// If N is even and greater than , print Not Weird
// Constraints:
// 1 <= N <= 100
// Output:
// Weird or Not Weird

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
}

function weird(N) {
    return ( N % 2 === 1 || N > 5 && N <= 20 ? 'Weird' : "Not Weird" )
}

function main() {
    const N = parseInt(readLine(), 10);
    console.log(weird(N));
}
