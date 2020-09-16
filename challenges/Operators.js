// Given the meal price (base cost of a meal), 
// tip percent (the percentage of the meal price being added as tip), 
// and tax percent (the percentage of the meal price being added as tax) for a meal, 
// find and print the meal's total cost.
// If Given ...
// meal_cost = 12, tip_percent = 20, tax_percent = 8
// Tip = 12 * 20/100 = 2.4
// Tax = 12 * 8/100 = 0.96
// TotalCost = 12 + 2.4 + 0.96
// Round TotalCost ie TotalCost = 15

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

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {

    let tip = meal_cost * (tip_percent/100);
    let tax = meal_cost * (tax_percent/100);
    let total_cost = (Math.round(meal_cost + tip + tax));

    console.log(total_cost);
}

function main() {
    const meal_cost = parseFloat(readLine());
    const tip_percent = parseInt(readLine(), 10);
    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
