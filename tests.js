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

    it("Check if the value entered was null", function(){
        var number = null;
        var test = check_prime_number(number);
        var expected = false;
        assert.equal(test,expected);
    })

    it("Checks if the value is a string", function(){
        var number ="invalid";
        var test = check_prime_number(number);
        var expected = false;
        assert.equal(test,expected,"Invalid input, string entered. Enter a correct value");
    })

    it("Checks if the value is an array", function(){
        var number = [1,2,3,4,5,6];
        var test = check_prime_number(number);
        var expected = false;
        assert.equal(test, expected,"Invalid Input, user entered an array.");
    })

    it("Checks if the value is an empty array", function(){
        var number = [];
        var test = check_prime_number(number);
        var expected = false;
        assert(test == expected);
    })

    it("Check if the value entered is zero", function(){
        var number = 0;
        var test = check_prime_number(number);
        var expected = false;
        assert.equal(test, expected);
    })

    it("Checks if value entered is a character", function(){
        var letter = A
        letter = letter.toLowerCase();
        var expected = a;
        assert.equal(test, expected,"Invalid input, character token not allowed");
    })

    it("Checks if the value entered is a special character", function(){
        var special_chars = ["!","£","$","%","^","&","*","~","<",">","?","@"];
        var test = [];
        var expected = false;
        for(var i =0; i < special_chars.length; i++){
            var number = special_chars[i];
            test[i] = check_prime_number(number);
        }
        for (var i = test.length - 1; i >= 0; i--) {
            assert.equal(test[i],expected);
        }
    })

    it("Checks if the value is very large", function(){
        var number = 1000;
        var test = check_prime_number(number);
        var expected = false;
        assert.equal(test, expected,"Exceeds the maximum value of 500");
    })
    
    it ("Checks if the value entered is very small", function(){
        var number =1;
        var test = check_prime_number(number);
        var expected = false;
        assert.equal(test, expected);
    })

    it("Checks if the value entered is a float", function(){
        var number = 10.5;
        var test = check_prime_number(number);
        var expected = false;
        assert.equal(test,expected,"Incorrect input, number has floating values");
    })
})


describe("Sum of prime number Tests", function(){

    it("Check the validity of the sums of the numbers entered", function(){
        var test = sum_of_primes(10);
        var expected = 17;
        assert.equal(test, expected);
    })
})