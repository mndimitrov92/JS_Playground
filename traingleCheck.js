"use strict.";

var testCase1 = [5, 6, 7, 8, 1, 2, 3, 4, 9, 10, 11, 12],
    testCase2 = [7, 7, 2, 2, 5, 6, 2, 2, 95, -14.5, 0, -0.233];


//check if valid triangle
function validTrinagle (a,b,c) {
  if (a +b > c &&  a + c > b && b + c > a){
    return true;
  }
  else {
    return false;
  }
}

// calculating the length of a line
function computeLengthOfLine(linePoints){
  return Math.sqrt(Math.pow(linePoints[2] - linePoints[0], 2) + Math.pow(linePoints[3] - linePoints[1], 2));
}

// Calculating the area 
function calcArea(side1, side2, side3) {
  let semiSum = (side1 + side2 + side3) / 2;
  let result = Math.sqrt(semiSum * (semiSum - side1) * (semiSum - side2) * (semiSum - side3)).toFixed(2);
  return result;
}

function validityCheck(inputArg) {
    if (inputArg.length !== 12) {
      return "Invalid arguments given";
    }

    // slicing the initial array of points into the 3 arrays representing each side
    var firstLine = inputArg.slice(0, 4);
    var secondLine = inputArg.slice(4, 8);
    var thirdLine = inputArg.slice(8);
    
    // representing the length of each side
    var sideA = +computeLengthOfLine(firstLine).toFixed(2);
    var sideB = +computeLengthOfLine(secondLine).toFixed(2);
    var sideC = +computeLengthOfLine(thirdLine).toFixed(2);

    var validFigure= validTrinagle(sideA, sideB, sideC);
    var area = calcArea(sideA, sideB, sideC);
    

    if (validFigure) {
      return `Triangle formed with area ${area}:\n With sides ${sideA}, ${sideB}, ${sideC}`;
    }
    else {
      return "Triangle not formed";
    }
}

console.log(validityCheck(testCase1));
console.log(validityCheck(testCase2)); 
