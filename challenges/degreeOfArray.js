/*

Given a non-empty array N. of non-negative numbers, 
the degree of this array is defined as the maximum frequency of any one of its elements.
Your task is to find the smallest possible length of a (contiguous) subarray of N, that has the same degree as N.
For example, in the array [1 2 2 3 1], the integer 2 occurs a maximum of twice. Hence the degree is 2.
Another example, in the array [1 2 1 2 3 1], the integer 1 occurs a maximum of three times. Hence the degree is 3.

Input:
Test case input contains 2 lines:
First line contains an integer T, representing the number of elements in the array.
The second line contains the array N, list of T integers each separated by a space.

Output:
Print the length of the smallest contiguous subarray of input array N, that has the same degree as N.
Code evaluation is based on your output, please follow the sample format and do not print anything else.

Sample input:
5
12231

Sample output:
2

See this YouTube for the solution discussion...
Degree of Array - Interview Question examined
https://www.youtube.com/watch?v=iSqgD7Esk7U

*/

process.stdin.resume();
process.stdin.setEncoding("ascii");
var inputData = "";
process.stdin.on("data", function (chunk) {
    inputData += chunk;
});
process.stdin.on("end", function () {
    // Do not edit: Output the solution to the console.
    const output = writeOutput(inputData);
    console.log(output);
});

// Please write your code inside the function block below.
// Grading criteria are based on stream output, please return your output to log your final result.

function writeOutput(inputData) {
    // Start writing code here to consume input, and return result.

    // Elements is a map of key => elementInfo
    // with key being each of the elements in the array
    // and elementInfo being the object with properties count, leftIndex, rightIndex for 
    // one particular element in the array

    let degree = 0;
    const elementsInfoHighestCount = new Map();
    let subArray = [];

  const elements = inputData.reduce((acc, num, index) => {
    let count;
    let leftIndex;
    let rightIndex;

    if (acc.has(num)) {
      const existing = acc.get(num);
      count = existing.count + 1;
      leftIndex = existing.leftIndex;
      rightIndex = index;
    } else {
      count = 1;
      leftIndex = index;
      rightIndex = index;
    }
    return acc.set(num, { count, leftIndex, rightIndex })
  }, new Map())


  // Determine the degree by looping through elements map
  elements.forEach((element, uniqueNum) => {
    if (element.count === degree) {
      elementsInfoHighestCount.set(uniqueNum, element);
    } else if (element.count > degree) {
      elementsInfoHighestCount.clear();
      elementsInfoHighestCount.set(uniqueNum, element);
      degree = element.count;
    }
  })

  // Get the shortest subarray array by looping through the elementInfoHighestCount map
  let result = elementsInfoHighestCount.values().next().value;
  if (elementsInfoHighestCount.size === 1) {
    subArray = inputData.slice(result.leftIndex, result.rightIndex + 1);
  } else if (elementsInfoHighestCount.size > 1) {
    elementsInfoHighestCount.forEach((element, num) => {

      const thisElementDiff = element.rightIndex - element.leftIndex;
      const previousElementDiff = result.rightIndex - result.leftIndex;

      if (thisElementDiff - previousElementDiff < 0) {
        result = elementsInfoHighestCount.get(num);
      }
    })

    subArray = inputData.slice(result.leftIndex, result.rightIndex + 1);
  }

  printOutput = subArray.length;
  return printOutput;

};
