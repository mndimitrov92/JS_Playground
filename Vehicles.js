"use strict";

// Vehicles 
function solve(args) {
    const S = +args[0];
    var result = 0;

    for (var cars = 0; cars *= 4 <= S; cars += 1) {
        for (var trucks = 0; trucks * 10 + cars * 4 <= S; trucks += 1) {
            for (var trikes = 0; trikes * 3 + trucks * 10 + cars * 4 <= S; trikes += 1) {
                if (cars * 4 + trucks * 10 + trikes * 3 === S) {
                    console.log('aaa');
                    result += 1;
                }
            }
        }
    }
    console.log(result);
}

// const test1 = ['50'],
//     test2 = ['10'],
//     test3 = ['20'];
// solve(test1);
// solve(test2);
// solve(test3);


function numbers(args) {
    let num_input = +args[0];
    for (let i = 1; i <= num_input; i++) {
        console.log(i);
    }
}
// numbers(['5']);


function MMSA(args) {
    let sum = 0,
        num_input = +args;
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
        sum += +args[i];
    }
    console.log("Sum:", sum);
    console.log("Average:", sum / args.length);
    console.log("Min:", Math.min(...args));
    console.log("Max:", Math.max(...args));

}

// MMSA(['1','2','3']);

function matrixOfNumbers(args) {
    let num_input = +args[0];

    for (let i = 1; i <= num_input; i++) {
        let result = "";
        for (let j = 1; j <= num_input; j++) {
            result += (i + j - 1);
        }
        console.log(result);
    }

}
// matrixOfNumbers(['3']);


function hexToDec(hex) {
    var result = 0, digitValue;
    var hex2 = hex[0].toLowerCase();
    for (var i = 0; i < hex2.length; i++) {
        digitValue = '0123456789abcdefgh'.indexOf(hex2[i]);
        result = result * 16 + digitValue;
    }
    console.log(result);
}

// hexToDec(['FE']);