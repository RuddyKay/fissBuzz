"use strict";
function checkFizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("fizzbuzz");
    }
    else if (num % 3 === 0) {
        console.log("fizz");
    }
    else if (num % 5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(num);
    }
}
for (let i = 1; i <= 100; i++) {
    checkFizzBuzz(i);
}
