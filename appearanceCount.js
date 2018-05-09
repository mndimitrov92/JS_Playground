"use strict";

var test_arr = [1,23,44,23,44,44,44,5,6,7,8,67,45,77,56];
function appearanceCount(arr, searchedNum){
    let counter = 0;
    if (typeof(searchedNum) !== 'number'){
        console.log("Insert a number");
        return false;
    }

    for(let i of arr) {
        if (i === searchedNum){
            counter += 1;
        }
    }
    return counter;
}

console.log(appearanceCount(test_arr,23));