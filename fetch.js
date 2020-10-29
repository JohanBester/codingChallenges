function fetch() {
  fs = require("fs");
  let lastNamesList = [];
  let nameFile = "lastNames.txt";
  // Reading last name data
  fs.readFile(nameFile, "utf8", function(err, data) {
    if (err) throw err;
    let lstNms = data;
    lstNms = lstNms.toString().split("\r\n");
    lastNamesList = lstNms;
    console.log("typeof lastNamesList is ...", typeof lastNamesList);
    console.log("lastNamesList", lastNamesList);
  });

  console.log("lastNamesList = ", lastNamesList);
}

console.log(fetch());
