// Allocate array
function allArray(arg) {
    let input = +arg[0];
    for (let i = 0; i < input; i++) {
        console.log(i * 5);
    }
}
// allArray(['4']);

//Lexicographically compare
function charComparison(args) {
    let firstArr = args[0],
        secondArr = args[1];

    if (firstArr.length > secondArr.length) {
        console.log('>');
    } else if (firstArr.length < secondArr.length) {
        console.log('<');
    } else {
        console.log('=');
    }

}
// charComparison(['aaaa','bbbb']);



// Length of maximum sequesnce in an array
function maxSequence(arr) {
    let currentSeq = 1,
        longestSeq = 1,
        indexOfLongest;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            currentSeq += 1;
        } else {
            if (longestSeq < currentSeq) {
                longestSeq = currentSeq;
                indexOfLongest = i - currentSeq + 1;
            }
            currentSeq = 1;
        }
    }
    //Length of maximum sequesnce in an array result
    let result = arr.slice(indexOfLongest, indexOfLongest + longestSeq);
    console.log('Elements with maximum sequence:', result);
    console.log('Length of maximum sequence:', result.length);
}

// maxSequence([1,2,3,4,4,4,4,4,5,6,7]);


// Maximal Increasing Sequence
function maxIncreasingSequence(arr) {
    let currentSeq = 1,
        longestSeq = 1,
        indexOfLongest;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === (arr[i + 1] - 1)) {
            currentSeq += 1;
        } else {
            if (longestSeq < currentSeq) {
                longestSeq = currentSeq;
                indexOfLongest = i - currentSeq + 1;
            }
            currentSeq = 1;
        }
    }
    //Length of maximum increasing sequence in an array result
    let result = arr.slice(indexOfLongest, indexOfLongest + longestSeq);
    console.log('Elements with maximum sequence:', result);
    console.log('Length of maximum sequence:', result.length);
}
// maxIncreasingSequence([1,2,3,4,5,5,4,4,4,4,5,6,7]);


//Selection Sort
function selectionSort(arr) {
    let minElement = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        minElement = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (+arr[j] < +arr[i]) {
                minElement = j;
            }
        }
        if (minElement != i) {
            let tmp = arr[i];
            arr[i] = arr[minElement];
            arr[minElement] = tmp;
        }
    }
    console.log(arr);
}
//selectionSort(['2','5','1','30','10']);

// Find the most occurances of a number  in an array
function mostFreqNumber(arr) {
    let modeMap = {},
        maxElement = arr[0],
        maxCount = 1;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (modeMap[element] == null) {
            modeMap[element] = 1;
        }
        else {
            modeMap[element]++;
        }
        if (modeMap[element] > maxCount) {
            maxElement = element;
            maxCount = modeMap[element];
        }
    }
    console.log(modeMap);
    console.log("The number " + maxElement + " has the most occurances ( " + maxCount + " times).");
}
// mostFreqNumber(['1','1','12','2','4','4','4','4','4','4','4','4','22','4','1','1','1']);


function binarySearch(arr, searchedValue) {
    let sortedArr = arr.sort(),
        startIndex = 0,
        foundElIndex,
        middlePoint = sortedArr.length / 2 | 0;
    endIndex = sortedArr.length;

    console.log(sortedArr);

    if (searchedValue >= arr[middlePoint]) {
        startIndex = middlePoint;
    } else {
        endIndex = middlePoint;
    }

    for (let i = startIndex; i < endIndex; i++) {
        if (sortedArr[i] === searchedValue) {
            foundElIndex = i;
        }
    }
    console.log("The index of the searched value is: " + foundElIndex);
}
// binarySearch([1,3,4,6,2,9,7,5,8],3);

//Subset with sum S
// function subsetWithSum(arr,sumInput){
//    TODO
// }

// subsetWithSum([1,5,6,7,2,4],11);




// Permutations of set
function* permute(a, n = a.length) {
    if (n <= 1) yield a.slice();
    else for (let i = 0; i < n; i++) {
        yield* permute(a, n - 1);
        const j = n % 2 ? 0 : i;
        [a[n - 1], a[j]] = [a[j], a[n - 1]];
    }
}

function permutations(n) {
    let newCombo = "";
    for (let i = 1; i <= n; i++) {
        newCombo += i;
    }
    return newCombo;
}
// let test1 = permutations(2);
// console.log(Array.from(permute(test1.split(''))).map(perm => perm.join('')));



/// Prime numbers
function primeNums(n) {
    let arr = [],
        upperLimit = Math.sqrt(n),
        output = [];

    for (let i = 0; i < n; i++) {
        arr.push(true);
    }

    for (let i = 2; i < upperLimit; i++) {
        if (arr[i]) {
            for (let j = i * i; j < n; j += i) {
                arr[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (arr[i]) {
            output.push(i);
        }
    }

    return output;
}
// console.log(primeNums(30));




// Checks if a certain sum is among a sequence of numbers
function sequenceOfGivenSum(arr,s) {
	let summ = 0, 
		solution = false;

	for (let i=0; i<arr.length; i++){
		for(let j=i; j<arr.length; j++){
			summ += arr[j];
			if(summ === s){
				solution = true;
				for(let k = 0; k<=j ; k++){
					console.log(arr[k]);
					
				}
				
			}
		}
		summ = 0;
	}
	if (!solution) {
		console.log(solution)
		console.log("There is no sequence with the given sum:", s);
	}
	return solution;

}

// console.log(sequenceOfGivenSum([1,2,3,4,5],4));