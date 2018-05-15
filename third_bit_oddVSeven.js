"use strict";
function oddOrEven(num) {
    result = num%2 === 0 ? "Even" : "Odd" ;
    console.log(result);
    return result;
}
 //oddOrEven(64);


function devideBy7or5(num) {
    if (num %5 === 0 || num%7 === 0) {
        console.log("True number");
    }
    else {
        console.log("False Number");
    }
}
//devideBy7or5(8);


function rectangle(width, height){
    let perimeter = 2*width + 2*height;
    let area = width*height;
    console.log("Area:" + area.toFixed(2) + "\n" + "Perimeter:" + perimeter.toFixed(2));
}
//rectangle(5.4,2.7);


function thirdDigit(num){
    let third = num.toString();
    let a = third.length - 3;
    if (+third[a] === 7){
        console.log("True third digit:",third[a]); 
    }
    else{
        console.log("False third digit");
    }
    
}
//thirdDigit(123756);


function thirdBit(num) {
    let holder = num.toString(2);
    let holderLen = holder.length;
    let third = holderLen - 4;
    if (holderLen > 4){
        console.log("The third bit of " + holder + "("+  num + ")" + " is " + holder[third]);
    } 
    else {
        console.log("0");
    }
}
//thirdBit(150);