"use strict";

function getMax(argList){
    var argArr = argList.split(" ");
    var  outputArr = []
    for (var i of argArr){
        outputArr.push(+i);
    }
    let maxElement  = Math.max(outputArr);
    console.log(maxElement);
}

getMax("4 5 6");