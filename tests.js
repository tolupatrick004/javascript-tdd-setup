'use strict'

var chai = require('chai');
var assert = chai.assert;

var SumOfPrimes = require('./lib/sum_of_primes.js');


describe("Prime Number Validity Tests", function(){

    it("Checks if the number entered is a prime number", function(){
        var number = 3;
        var test = check_prime_number(number);
        var expected = true;
        assert.equal(test, expected);
    })

    it("Checks if the valued entered is negative", function(){
        var number = -1;
        var test = check_prime_number(number);
        var expected = false;
        assert.equal(test, expected, "Invalid input, number is a negative number");
    })

    it("Check if no number was entered", function(){
        var number=" ";
        number = number.trim();
        var test = check_prime_number(number);
        var expected = false;
        assert.equal(test, expected, "Invalid input, No number was entered");

    })
})


describe("Sum of prime number Tests", function(){

    it("Check the validity of the sums of the numbers entered", function(){
        var test = sum_of_primes(10);
        var expected = 17;
        assert.equal(test, expected);
    })
})