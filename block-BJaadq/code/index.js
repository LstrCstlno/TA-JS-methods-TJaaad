// NOTE: You can not use reduce methods to solve this exercise
let StarkPeople = got.houses[0].people.map((people) => people.name)
let LannistersPeople = got.houses[1].people.map((people) => people.name)
let BaratheonsPeople = got.houses[2].people.map((people) => people.name)
let TargaryensPeople = got.houses[3].people.map((people) => people.name)
let GreyjoysPeople = got.houses[4].people.map((people) => people.name)
let TyrellsPeople = got.houses[5].people.map((people) => people.name)
let TullysPeople = got.houses[6].people.map((people) => people.name)
let RedwynePeople = got.houses[7].people.map((people) => people.name)
let FreysPeople = got.houses[8].people.map((people) => people.name)
let ArrynsPeople = got.houses[9].people.map((people) => people.name)
let DothrakisPeople = got.houses[10].people.map((people) => people.name)


function countAllPeople() {
  let allPeople = [];
  for (const house of got.houses) {
    allPeople.push(house.people.map((people) => people.name))
  }
  return allPeople.flat().length
}

function peopleByHouses() {
  let peopleByHouses = {};
  for (const house of got.houses) {
    peopleByHouses[house.name] = house.people.map((people) => people.name).length
  }
  return peopleByHouses
}

function everyone() {
  let allPeople = [];
  for (const house of got.houses) {
    allPeople.push(house.people.map((people) => people.name))
  }
  return allPeople.flat()
}

function nameWithS() {
  let nameWithS = []
  for (const house of got.houses) {
    nameWithS.push(house.people.map((people) => people.name))
  }
  return nameWithS.flat().
  filter((names) => {
    if (names.includes("S") || names.includes("s")) 
      return names
  })
}

function nameWithA() {
  let nameWithA = []
  for (const house of got.houses) {
    nameWithA.push(house.people.map((people) => people.name))
  }
  return nameWithA.flat().
  filter((names) => {
    if (names.includes("a") || names.includes("A")) 
      return names
  })
}

function surnameWithS() {
  let surnameWithS = []
  for (const house of got.houses) {
  if (house.name.startsWith("S")) {
    surnameWithS.push(house.people.map((names) => names.name))
  }
}
return surnameWithS.flat()
}

function surnameWithA() {
  let surnameWithA = []
  everyone()
  .filter((name) => {
  if(name.split(" ")[1].startsWith("A"))
  surnameWithA.push(name)
  return surnameWithA
})
return surnameWithA
}

function peopleNameOfAllHouses() {
  let peopleNameOfAllHouses = {};
  for (const house of got.houses) {
    peopleNameOfAllHouses[house.name] = house.people.map((people) => people.name)
  }
  return peopleNameOfAllHouses
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// // Output should be
// //["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// // Output should be
// // ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// // Output should be
// // ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// // Output should be
// // ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// // Output should be
// // ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// // Output should be
// // {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}






