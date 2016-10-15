// Note class

'use strict'

module.exports = function() {

	//To detect if a given number is a prime number
	function check_prime_number(number)
	{
		//used to check the state of the number: true if its prime and false if it is not prime
	    var check = false;
	    //The threshold for the maximum number to be checked for prime validity
	    var max = 500;
	    //Using a squareroot of the number as the divisor for the prime number test helps to reduce the loop count as n increases
	    var divisor = Math.ceil(Math.sqrt(number));

	    //Proposes as non prime numbers; unit and all the negatives numbers
	    if (number < 2) {
	        check = false;
	    }
	    if (number == 2) {
	        check = true;
	    }
	    //Number above the threshold should not be calculated 
	    if (number > max){
	    	check = false;
	    }
	    //Checks if number greater than 2 and less than the threshold is a prime number
	    else {
	        for (var i = divisor; i >= 2; i--)
	        {
	            if (number % i !== 0) { check = true; } else { check = false; break; }
	        }
	    }

	    return check;
	}
}
