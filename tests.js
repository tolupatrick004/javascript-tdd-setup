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


describe("Sum of prime number Tests", function(){

    it("Check the validity of the sums of the numbers entered", function(){
        var test = sum_of_primes(10);
        var expected = 17;
        assert.equal(test, expected);
    })
})