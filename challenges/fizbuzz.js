// Write a program that prints all the numbers from 1 to n, where (n >= 0).
// But for multiples of three print “Fizz” instead of the number, 
// and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”.
// Bonus:
// Tally how many time Fizz, Buzz, and FizzBuzz are printed

function FizzBuzz(n) {
    let fzz = 0;
    let bzz = 0;
    let fzzbzz = 0;

    for (let i = 1; i <= n; i++) {

        // Very short FizzBuzz solution
        // console.log(
        //     ((i%3) ? "" : "Fizz") + ((i%5) ? "" : "Buzz") || i
        // )

        // Solution with totals for fizz, buzz, and fizzbuzz
        if (i % 15 == 0) {
        	console.log("FizzBuzz");
        	fzzbzz++;
        }
    	else if (i % 3 == 0) {
    		console.log("Fizz");
    		fzz++;
    	}
    	else if (i % 5 == 0) {
    		console.log("Buzz");
    		bzz++;
    	}
    	else console.log(i);
    };
    console.log(fzz, bzz, fzzbzz);
}
