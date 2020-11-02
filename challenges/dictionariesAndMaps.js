/*
Task
----
Given n number of names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. 
For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for name is not found, print 'Not found' instead.

Note: Your phone book should be a Dictionary/Map/HashMap data structure.

Input Format
------------
The first line contains an integer, n, denoting the number of entries in the phone book.
Each of the n subsequent lines describes an entry in the form of 2 space-separated values on a single line. 
The first value is a friend's name, and the second value is an 8-digit phone number.

After the n lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a name to look up, and you must continue reading lines until there is no more input.

Note: Names consist of lowercase English alphabetic letters and are first names only.

Constraints
------------
    1 <= n <= 10 to the 5th power
    1 <= queries <= 10 to the 5th power

Output Format
--------------
On a new line for each query, print 'Not found' if the name has no corresponding entry in the phone book; otherwise, print the full name and phoneNumber in the format 'name=phoneNumber'.

Sample Input
-------------
3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry

Sample Output
--------------
sam=99912222
Not found
harry=12299933

Explanation
------------
We add the following n = 3 (Key,Value) pairs to our map so it looks like this:
    phoneBook = {(sam,99912222), (tom,11122222), (harry,12299933)}

We then process each query and print key=value if the queried key is found in the map; otherwise, we print 'Not found'.

Query 0: sam
Sam is one of the keys in our dictionary, so we print sam=99912222.

Query 1: edward
Edward is not one of the keys in our dictionary, so we print Not found.

Query 2: harry
Harry is one of the keys in our dictionary, so we print harry=12299933.
*/

function processData(input) {
  //Enter your code here...

  //split the text input into an array
  let data = input.split("\n");
  //get the number of entries out of the array
  let numEntries = parseInt(data.shift());
  // move all the queries into an array
  let queries = data.splice(numEntries);
  // turn names and numbers into a phoneList array
  let phoneList = data.map((item) => item.split(" "));
  // turn phone list array into a Map
  let phoneListMap = new Map(phoneList);

  // run queries to find matches in phoneListMap
  queries.map((name) => {
    if (phoneListMap.has(name)) {
      console.log(name + "=" + phoneListMap.get(name));
    } else {
      console.log("Not found");
    }
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
