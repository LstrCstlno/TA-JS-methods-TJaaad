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

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map((person)=> person.name)

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => person.grade)

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person)=> person.sex)

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopleName.filter((person => {
  if(person.startsWith("J")|| person.startsWith("P"))
  return true
})));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleName.filter((person => {
  if(person.startsWith("A")|| person.startsWith("C"))
  return true
})).map((person)=>person.length));

// Log all the filtered male ('M') in persons array
console.log(persons.filter((person)=>{
  if (person.sex.includes("M")) {
    return person.name
  }
}).map((person)=>person.name))

// Log all the filtered female ('F') in persons array
console.log(persons.filter((person)=>{
  if (person.sex.includes("F")) {
    return person.name
  }
}).map((person)=>person.name))

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((person)=>{
  if (person.sex.includes("F")) {
    return person.name
  }
}).filter((person)=>{
  if(person.name.startsWith("C") || person.name.startsWith("J"))
  return person.name
}).map((person)=> person.name))

// Log all the even numbers from peopleGrade array
console.log(persons.filter((person)=> {
  if (person.grade %2 === 0) {
    return true
  }
}).map((person) => person.grade))
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((person) => person.name.includes("J")))
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((person) => person.name.includes("P")))
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.filter((person) => {
  if (person.sex.includes("F") && person.grade > 10 && person.name.startsWith("J")) {
    return true
  }
}))

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex.includes("F"))

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex.includes("M"))
// Find the sum of all grades and store in gradeTotal
gradeTotal = peopleGrade.reduce((acc,cuv) => acc + cuv)

// Find the average grade
averageGrade = gradeTotal/peopleGrade.length

// Find the average grade of male
let totalMaleGrade = persons.filter((person)=>{
  if (person.sex.includes("M")) {
    return person.name
  }
}).map((person)=>person.grade).reduce((acc,cuv) => acc+cuv)

let maleGradeLength = persons.filter((person)=>{
  if (person.sex.includes("M")) {
    return person.name
  }
}).map((person)=>person.grade).length

avgMaleGrade = totalMaleGrade/ maleGradeLength

// Find the average grade of female
let totalFemaleGrade = persons.filter((person)=>{
  if (person.sex.includes("F")) {
    return person.name
  }
}).map((person)=>person.grade).reduce((acc,cuv) => acc+cuv)

let femaleGradeLength = persons.filter((person)=>{
  if (person.sex.includes("F")) {
    return person.name
  }
}).map((person)=>person.grade).length

avgFemaleGrade = totalFemaleGrade/ femaleGradeLength

// Find the highest grade
let peopleGradeClone = [...peopleGrade]
console.log(peopleGradeClone.sort((a,b) => a-b).pop());

// Find the highest grade in male
console.log(persons.filter((person)=>{
  if (person.sex.includes("M")) {
    return person.name
  }
}).map((person)=>person.grade).sort((a,b) => a-b).pop());
// Find the highest grade in female
console.log(persons.filter((person)=>{
  if (person.sex.includes("F")) {
    return person.name
  }
}).map((person)=>person.grade).sort((a,b) => a-b).pop());

// Find the highest grade for people whose name starts with 'J' or 'P'
let personGradeJP = (persons.filter((person) =>{
if(person.name.startsWith("J") || person.name.startsWith("P")){
  return true
}
} ).map((person) => person.grade));

console.log([...personGradeJP].sort((a,b) => a-b).pop()); 

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log([...peopleGrade].sort((a,b) => a-b)) // yes peopleGrade got changed

// Sort the peopleGrade in descending order
console.log([...peopleGrade].sort((a,b) => b-a))

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a,b) => b-a))

// Sort the array peopelName in ascending `ABCD..Za....z`
console.log([...peopleName].sort())
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort().reverse())