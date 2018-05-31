"use strict";

function task_separator(task) {
  console.log(`==========Separating task ${task} from task ${task + 1}===============`);
}

// Person constructing with name, surname, age and gender properties
function makePerson(first_name, last_name, age, isFemale) {
  var temp = [];

  for (let i = 0; i < arguments.length - 1; i += 1) {
    temp.push(arguments[i]);

  }
  if (arguments.length < 4 || temp.some(function (arg) { return !arg })) {
    return "Invalid parameters";
  }

  return {
    first_name: first_name + "",
    last_name: last_name + "",
    age: age + "",
    gender: (isFemale === true || isFemale === false) ? isFemale ? "female" : "male" : "unknown"
  };
}


//  Generating 10 random people
function randomPeopleGenerator() {
  var randomAge,
    randomNames = ['Dwayne', 'Jennings', 'Michelle', 'Walters', 'Peggy', 'Waters', 'Stewart', 'Bradford', 'Cummings', 'Laura', 'Kelly',
      'Maryann', 'Rivera', 'Grace', 'Walton'],
    randomIndex,
    randomName,
    randomSex,
    randomIndex2,
    randomName2;

  randomIndex = Math.random() * randomNames.length | 0;
  randomSex = !!(randomIndex % 2);
  randomName = randomNames[randomIndex];
  randomAge = Math.random() * 100 | 0;
  randomIndex2 = randomIndex - 1 >= 0 ? randomIndex - 1 : randomIndex;
  randomName2 = randomNames[randomIndex2];

  return makePerson(randomName, randomName2, randomAge, randomSex);
}


function peopleArrGenerator(count) {
  var people = [];

  for (let i = 0; i < count; i += 1) {
    people.push(randomPeopleGenerator());
  }
  return people;
}

let peopleArr = peopleArrGenerator(5);
console.log(peopleArr);

task_separator(1);

// Check to see if the array contains people under 18 with array methods only
function peopleUnder18(arr) {
  let underAgedPeople,
    peoplecounter = 0;
  underAgedPeople = (arr.map(function (person) {
    if (person.age <= 18) {
      peoplecounter += 1;
    }
  }));

  arr.forEach(function (person) {
    console.log(`${person.first_name} of age: ${person.age}`);
  });

  return `The number of people under 18 is: ${peoplecounter}`;

}
console.log(peopleUnder18(peopleArr));

task_separator(2);

// Function that only prints the names of the people who are under 18

function underAgedOnly(arr) {
  let underAge = arr.filter(function (person) {
    return person.age <= 18;
  });

  if (underAge.length < 1) {
    console.log("There are no people onder 18");
  } else {
    underAge.forEach(function (person, index) {
      console.log(`Underaged person #${index + 1}:${person.first_name} \t${person.gender} \t aged ${person.age}`);
    });
  }
}
underAgedOnly(peopleArr);

task_separator(3);

//Function that returns the average age of all females
function averageFemaleAge(arr) {
  let sum = 0,
    averageAge = 0,
    females = arr.filter(function (person) {
      return person.gender === 'female';
    });

  females.forEach(function (woman) {
    sum += (+woman.age);
  });
  averageAge = sum / females.length;

  console.log(`Women in the array are: ${females.length} and their average age is ${averageAge.toFixed(2)}`);
}
averageFemaleAge(peopleArr);

task_separator(4);

// Finding the youngest male person
function youngestMale(arr) {
  var youngest = arr.filter(function (person) {
    return person.gender === "male";
  });
  youngest.sort(function (person1, person2) {
    return person1.age - person2.age;
  });
  let result = youngest.find(function (youngestMale) {
    return youngestMale.age === youngest[0].age;
  });

  console.log(youngest);
  console.log(`The youngest male person is ${result.first_name} ${result.last_name} ${result.age}`);

}
youngestMale(peopleArr);

task_separator(5);

// grouping people  by the first letter of their name with reduce function
function groupPeople(arr) {
  let grouped = arr.reduce(function (obj, person) {
    obj[person.first_name[0]] ? obj[person.first_name[0]].push(person) : obj[person.first_name[0]] = [person];
    return obj;
  }, {});

  return grouped;
}

console.log(groupPeople(peopleArr));