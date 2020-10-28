/*
    Return a series of random dollar amounts
    And write them to an output file
    Min and Max are positive numbers with ...
        min >= 1 and 
        1 < max <= 1 million 
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
  let file = "randomAmounts.txt";

  while (i <= times) {
    let rndAmount = Math.random() * (max - min + 1) + min;
    rndAmount = rndAmount.toLocaleString("en-US", styleObj);
    !data == "" ? (data += "\n" + rndAmount) : (data = rndAmount);
    i++;
  }

  let writeData = function writeDataFile(data, file) {
    // Write data in to 'file'
    fs.writeFile(file, data, (err) => {
      // In case of a error throw err.
      if (err) throw err;
    });
  };

  return writeData(data, file);
}

randomAmount(10, 100, 7);
