// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9)
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.toString().replaceAll(",", " ");
// - Add two new words in the strings array "called" and "sentance"
strings.concat("called", "sentence")

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.concat("called", "sentence").toString().replaceAll(",", " ");
// - Remove the first word in the array (strings)
[...strings].shift();

// - Find all the words that contain 'is' use string method 'includes'
let isWord = strings.filter((str) => str.includes("is"));


// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is");

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((num) => num%3 ===0) // false

// -  Sort Array from smallest to largest
sortedNumber = [...numbers]
sortedNumber.sort((a, b) => a-b);

// - Remove the last word in strings
[...strings].pop();
// - Find largest number in numbers
let max = 0;
for (const number of numbers) {
  if (number > max) {
    max = number
  }
}
console.log(max);

// - Find longest string in strings
let longest = "";
for (const string of strings) {
  if (string.length > longest.length) {
    longest = string
  }
}
console.log(longest);

// - Find all the even numbers
evenNum = numbers.filter((num) => num %2 ===0)
// - Find all the odd numbers
oddNum = numbers.filter((num) => num %2 !==0)
// - Place a new word at the start of the array use (unshift)
let clone = [...strings];
clone.unshift("adding");
// - Make a subset of numbers array [18,9,7,11]
slice =   numbers.slice(3 , 7);
// - Make a subset of strings array ['a','collection']
sliceString = strings.slice(2 , 4);
// - Replace 12 & 18 with 1221 and 1881
numbers.indexOf(12)
numbers[1] = 1221;
numbers.indexOf(18);
numbers[3] = 1881;
// - Replace words in strings array with the length of the word
function replaceStr(str) {
  str = str.length
  return str
}

let numStrings = strings.map(replaceStr);

// - Find the sum of the length of words using above question

totalLength = numStrings.reduce((accumilator, currentValue)=> accumilator + currentValue, 0)

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let firstNameJ = [];
for(let i = 0 ; i<customers.length; i++){
  if (customers[i].firstname.includes("J")) {
    firstNameJ.push(customers[i].firstname);
  }
}
// - Create new array with only first name
let firstName = [];
for(let i = 0 ; i<customers.length; i++){
    firstName.push(customers[i].firstname);
}

// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = [];
for(let i = 0 ; i<customers.length; i++){
  fullName.push(customers[i].firstname + " " + customers[i].lastname);
}
// - Sort the array created above alphabetically
console.log(fullName.sort());

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowName = [];;
for (const name of firstName) {
  if (name.includes("a") ||name.includes("e") ||name.includes("i") ||name.includes("o") ||name.includes("u")){
    vowName.push(name);
  }
}