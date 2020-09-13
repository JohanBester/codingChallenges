function FizzBuzz(n) {
    let fzz = 0;
    let bzz = 0;
    let fzzbzz = 0;

    for (let i = 1; i <= n; i++) {

        // Very short FizzBuzz solution
        // console.log(
        //     ((i%3) ? "" : "Fizz") + ((i%5) ? "" : "Buzz") || i
        // )

        // SoOlution with totals for fizz, buzz, and fizzbuzz
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

