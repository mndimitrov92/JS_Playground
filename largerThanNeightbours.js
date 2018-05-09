"use strict.";

var test_arr = [1, 2, 3, 2, 4, 5, 3 ,1 , 8, 9, 7];

function largerThanNeightbours(arr){
    let counter = 0;

    for(let i = 1; i < arr.length; i += 1) {
        for (let j = i+1; j <= arr.length; j += 1) {
            if (arr[i] > arr[i-1] && arr[i] > arr[j] && j === (i+1)) {
                counter += 1;
                console.log(`First Array: ${arr[i]} \t Second Array: ${arr[j]}`);
            }
        }
    }
    return counter;
}


function findIndexOfFirstLargerThanNeighbours(arr){
    for(let i = 1; i < arr.length; i += 1) {
        for (let j = i+1; j <= arr.length; j += 1) {
            if (arr[i] > arr[i-1] && arr[i] > arr[j] && j === (i+1)) {
                return `The index of the first element greater than his neighbours is ${i} and the element is ${arr[i]}`;
            }
        }
    }
}


console.log(largerThanNeightbours(test_arr));

console.log(findIndexOfFirstLargerThanNeighbours(test_arr));

