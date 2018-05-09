"use strict";

function lastDigit(arg) {
    var words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var lasDig = arg.toString().split('').pop();
    var arrIn = +lasDig;
    return words[arrIn]
}

console.log(lastDigit(97));