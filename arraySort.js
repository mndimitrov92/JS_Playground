"use strict.";

// Sorting an array with bubble sort algorithm
var testArr = [4,2,5,1,8,10,3,6];

function arrSort(arr) {
  for (let i = 0; i < (arr.length -1); i += 1){
    for (let j = 0; j < arr.length - i - 1; j+=1){
      if (arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arr);
}

arrSort(testArr);