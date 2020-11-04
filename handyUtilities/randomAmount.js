/*
    Return a series of random dollar amounts
    And write them to an output file
    Min and Max are positive numbers with ...
        1 dollar <= amount <= 1 million 
    Times is the number of times to run this function
      default is 1 time
*/

function randomAmount(min = 1.1, max = 999999.99, times = 1) {
  const fs = require("fs");
  const styleObj = {
    style: "currency",
    currency: "USD",
  };
  let i = 1;
  let data = "";
  let dataset = [];

  while (i <= times) {
    let rndAmount = Math.random() * (max - min + 1) + min;
    rndAmount = rndAmount.toLocaleString("en-US", styleObj);
    dataset.push(rndAmount);
    i++;
  }

  // Write data in to 'file'
  let file = "randomAmounts.txt";
  let writeData = function writeDataFile(data, file) {
    fs.writeFile(file, data, (err) => {
      if (err) throw err;
    });
    return writeData(data, file);
  };
  return dataset;
}

console.log(randomAmount(10, 100, 7));
