// Write a 'Person' class with an instance variable, 'age', 
//  and a constructor that takes an integer, initialAge, as a parameter. 
// The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative; 
// if a negative argument is passed as initialAge, 
//  the constructor should set age to 0 and print "Age is not valid, setting age to 0."
//
// In addition, you must write the following instance methods:
//  function yearPasses() should increase the age instance variable by 1.
//  function amIOld() should perform the following conditional actions:
//      If age < 13, print You are young..
//      If age >= 13 and age < 18, print You are a teenager..
//      Otherwise, print You are old..
//
// Input Format:
// Input is handled for you by the code below.
// The first line of the main function contains an integer, T (the number of test cases), 
//  and the T subsequent lines each contain an integer denoting the age of a Person instance.
//
// Constraints:
//  1 <= T <= 4
//  -5 <= age <= 30
// 
// Output Format:
// Complete the method definitions provided in the code so they meet the specifications outlined above; 
// The code to test your work is already provided below. 
// If your methods are implemented correctly, each test case will print 2 or 3 lines (depending on whether or not a valid initialAge was passed to the constructor).

//**** Leave this code as is ****/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

//**** DO YOUR WORK HERE BELOW ****/
//*********************************/
class Person {
    constructor(initialAge) {
        // Add some more code to run some checks on initialAge
        let age = 0;
        (initialAge < 0 ? (console.log("Age is not valid, setting age to 0.")) : age = initialAge);

        this.amIOld = function () {
            // Do some computations in here and print out the correct statement to the console
            let ageStatement = "";
            if (age < 13) {
                ageStatement = "You are young.";
            }
            else if (age < 18) {
                ageStatement = "You are a teenager.";
            }
            else {
                ageStatement = "You are old.";
            };
            console.log(ageStatement);
        };
        this.yearPasses = function () {
            // Increment the age of the person in here
            age++;
        };
    }
}

//**** Leave this code as is ****/
function main() {
    var T=parseInt(readLine());
    for(i=0;i<T;i++){
        var age=parseInt(readLine());
        var p=new Person(age);
        p.amIOld();
        for(j=0;j<3;j++){
            p.yearPasses();
        }
        p.amIOld();
        console.log("");   // print empty line
    }
}
