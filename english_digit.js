function sayHello(name){
    return `Hello ${name}!`;
}
// console.log(sayHello('John'));


// The largest number among inputs
function getMax(a,b){
    if (typeof(a) !== 'number' || typeof(b) !== 'number'){
        return;
    }
    if (a>=b){
        return a;
    }
    return b;
}

function getMaxOfThree(){
    var stdin = process.openStdin();
    stdin.addListener("data", function(d){
        console.log("You entered: " + d.toString().trim());
        let output = d.toString().trim().split(' ');
        let result;
        for(let i = 1; i < output.length; i+=1){
            result = getMax(+output[i-1],+output[i]);
        }
        console.log(result);

    });

}
// getMaxOfThree();


// Print the English word of the last digit in a number
function englishDigit(input){
    if (typeof(input) !== 'number'){
        return;
    }
    let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], 
        output,
        convertedInput = input.toString();
    
    output = words[convertedInput[convertedInput.length-1]];
    return output;

}

// console.log(englishDigit(42));
// console.log(englishDigit(555));
// console.log(englishDigit(4));


// Write a method that counts how many times given number appears in a given array.

