let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let allGrade = persons.map((person) => person.grade)
let totalGrade = allGrade.reduce((acc, num) => acc + num)
averageGrade = totalGrade/allGrade.length

// Find the average grade of male
let allMaleGrade = persons.filter((person) => person.sex === "M")
.map((person) => person.grade)

let totalMaleGrade = allMaleGrade.reduce((acc, num) => acc + num)
averageMaleGrade = totalMaleGrade/allMaleGrade.length

// Find the average grade of female
let allFemaleGrade = persons.filter((person) => person.sex === "F")
.map((person) => person.grade)

let totalFemaleGrade = allFemaleGrade.reduce((acc, num) => acc + num)
averageFemaleGrade = totalFemaleGrade/allFemaleGrade.length

// Find the highest grade
highestGrade = allGrade.sort((a,b) => a-b).pop();

// Find the highest grade in male
highestMaleGrade = allMaleGrade.sort((a,b) => a-b).pop();
// Find the highest grade in female
highestFemaleGrade = allFemaleGrade.sort((a,b) => a-b).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradeByPersonJorP = persons.filter((person) => {
  if (person.name.startsWith("J") || person.name.startsWith("P")) {
    return person.grade
  }})
.map((person) => person.grade)
.sort((a,b)  => a-b)
.pop()

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = {}
fruitBasket.sort()
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

data.reduce((acc, cv) => acc.concat(cv)) 

// Using reduce flat data array

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

dataTwo[3].reduce((acc, cv) => acc.concat(cv))
dataTwo[3] = dataTwo[3].reduce((acc, cv) => acc.concat(cv))
dataTwo.reduce((acc, cv) => acc.concat(cv)) 
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

function increment(num) 
{
    return num += 1
}

function double(num) 
{
    return num *= 2
}

function decrement(num) 
{
    return num -= 1
}

function triple(num) 
{
    return num *= 3
}

function half(num) 
{
  if (num % 2 == 0) {
    return num/2
  }else
  return Math.round(num/2) -1
}

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

pipeline.reduce((acc, cv) => acc = cv(acc), 3 ) // 19

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7
  decrement(7) - return 6
  double(6) - return 12
  triple(12) - return 36
  half(36) - return 1
  increment(18) - return 19
  ...
*/
pipeline.reduce((acc, cv) => acc = cv(acc), 3 ) // 19

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
pipeline2.reduce((acc, cv) => acc = cv(acc), 8 ) // 165
