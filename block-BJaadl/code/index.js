let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arrs) {
  let longest = " ";
  for (const arr of arrs) {
    if (arr.length > longest.length) {
      longest = arr;
    }
  }
  return longest;
}

// - Convert the above array "words" into an array of length of word instead of word.
wordLengths = words.map((word) => word = word.length);


// - Create a new array that only contains word with atleast one vowel.


let vowWords = words.filter((word) => {
  if (word.includes("a") || word.includes("e") ||word.includes("i") ||word.includes("o") ||word.includes("u")){
    return true
  }else{
    return false;
  }
});

// - Find the index of the word "rhythm"
words.indexOf("rhythm");

// - Create a new array that contians words not starting with vowel.
let notStartVowWords = words.filter((word) => {
  if (word.startsWith("a") || word.startsWith("e") ||word.startsWith("i") ||word.startsWith("o") ||word.startsWith("u")){
    return false
  }else{
    return true;
  }
});

// - Create a new array that contianse words not ending with vowel
let notEndVowWords = words.filter((word) => {
  if (word.endsWith("a") || word.endsWith("e") ||word.endsWith("i") ||word.endsWith("o") ||word.endsWith("u")){
    return false
  }else{
    return true;
  }
});



let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arrs) {
  let sum = 0
  for (let arr of arrs) {
    sum = sum + arr
  }
  return sum;
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let num3 = numbers.map((num)=> num*3);

// - Create a new array that contains only even numbers
let even = numbers.filter((num) => num%2 === 0);

// - Create  a new array that contains only odd numbers.
let odd = numbers.filter((num) => num%2 !== 0);

// - Create a new array that should have true for even number and false for odd numbers.
function oddnum(num) {
return num%2? false:true
}

let boolnum = numbers.map(oddnum);

// - Sort the above number in assending order.
let acenum = [...numbers].sort((a,b)=> a-b);

// - Does sort mutate the original array?
// yes it does

// - Find the sum of the numbers in the array.
sumnum = numbers.reduce((acc,cuv) => acc+cuv);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arrays) {
  let sum = 0
for (const array of arrays) {
  sum = sum + array;
}
let average = sum / arrays.length
return average
}

let strings = [
  'seat', 
  'correspond', 
  'linen', 
  'motif', 
  'hole', 
  'smell', 
  'smart', 
  'chaos', 
  'fuel', 
  'palace', 
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(arrs) {
  let sum = 0
  for (const arr of arrs) {
    sum = sum + arr.length;
  }
  let average = sum / arrs.length
  return average
  }

