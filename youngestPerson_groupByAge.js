"use strict";

var people = [
              {first_name: "Ivan", last_name: "Petrov", age: 40},
              {first_name: "Georgi", last_name: "Stoyanov", age: 22},
              {first_name: "Pesho", last_name: "Stamatov", age: 35},
              {first_name: "Slavi", last_name: "Kolev", age: 22},
              {first_name: "Gogo", last_name: "Minchev", age: 40},
              {first_name: "Angel", last_name: "Damyanov", age: 22},
              {first_name: "Slavi", last_name: "Trifanov", age: 36},
              {first_name: "Georgi", last_name: "Milchev", age: 80}
            ];


// Printing the youngest person/people
function youngestPerson(obj) {
  let ages = [],
      youngest = Math.min(...ages);

  for (let person of obj){
    ages.push(person.age);
  }


  for (let person of obj) {
    if (person.age === youngest) {
      console.log(`The youngest person is ${person.first_name} ${person.last_name}, aged ${person.age}`);
    }
  }
}
//youngestPerson(people);


// Grouping people by property
Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item){
    const val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}

var groupByAge = people.groupBy("first_name");
console.log(groupByAge);