Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat(['black', 'red', 21, true]); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   - Parameter: string datatype ("seperator")
   - Return: a string with all array elements joined
   - Example:
     ```js
     let fruit = ["apple", "bananan", "orange", "mango"];
     fruitSalad = fruit.join("+"); //'apple+bananan+orange+mango'
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     console.log(sentanceArray.join(' ,')); //A ,quick ,brown ,fox ,jumped ,over ,a ,lazy
     let colors = ['red', 'green', 'blue'];
     console.log(colors.join(",")); // red,green,blue
     ```
   - `join` accepts an arrray and returns a string with all the elements of the array seperated by a seperator
   - No it does not mutate the original array

3. `flat`
   - Parameter: number upto how many arrays within the array to flatten, defaults to 1.
   - Return: a new array including all the sub array elements sequencially
   - Example:
     ```js
     let fruit = ["apple", ["bananan", ["orange", "mango"]]];
     fruitSalad = fruit.flat(); //['apple', 'bananan', Array(2)]
     let fruit = ["apple", ["bananan", ["orange", "mango"]]];
     fruitSalad = fruit.flat(2); //(4) ['apple', 'bananan', 'orange', 'mango']
     let colors = ['red', ['green', ['blue', ['orange', 'black', 'white', 'brown']]]];
     console.log(colors.flat(Infinity)); // (7) ['red', 'green', 'blue', 'orange', 'black', 'white', 'brown']
     ```
   - `flat` accepts an array with multiple subarrays and returns a new array with the value of all the subarrays.
   - No it does not mutate the original array

4. `push`
- Parameter: each addition array element to be added to the end of the array
   - Return: the same array with new length and values
   - Example:
     ```js
     let fruit = ["apple","banana","orange", "mango"];
     fruitSalad = fruit.push("mango", "pinapple", "watermelon"); 
     console.log(fruitSalad) // 7
     console.log(fruit); // (7) ['apple', 'banana', 'orange', 'mango', 'mango', 'pinapple', 'watermelon']
     let colors = ['red', 'green', 'blue'];
     console.log(colors.push('orange', 'black', 'white', 'brown')); // 7 
     console.log(colors); // ['red', 'green', 'blue', 'orange', 'black', 'white', 'brown']
     ```
   - `push` returns the array with new length and mutates the array with new values
   - yes it does mutate the original array

5. `indexOf`
- Parameter: the element to be searched and the index from where the search starts
   - Return: the index of the element were searching for or -1 if index not found
   - Example:
     ```js
     let fruit = ["apple","banana","orange", "mango"];
     fruit.indexOf("mango"); // 3
     console.log(indexOf("mango", -2)); // 3
     ```
   - `indexOf` returns the index of a value from an array
   - it does not mutate the original array

6. `lastIndexOf`
- Parameter: the element to be searched and the index from where the search starts
   - Return: the last index of the element were searching for or -1 if index not found
   - Example:
     ```js
     let fruit = ["apple","banana","orange", "mango", "apple"];
     console.log(fruit.lastIndexOf("apple")); // 4
     console.log(fruit.lastIndexOf("apple", -2)); // 0
     ```
   - `lastIndexOf` returns the last index of a value from an array 
   - it does not mutate the original array

7. `includes`
- Parameter: the element to be searched and the index from where the search starts
   - Return: boolean true or false
   - Example:
     ```js
     let fruit = ["apple","banana","orange", "mango", "apple"];
     console.log(fruit.includes("apple")); // true
     console.log(fruit.includes("apple", 1)); // true
     console.log(fruit.includes("cherry"));// false
     ```
   - `includes` returns true or false if an element is present in an array or not
   - it does not mutate the original array

8. `reverse`
   - Parameter: reverse();
   - Return: the array is reversed
   - Example:
     ```js
     let fruit = ["apple","banana","orange", "mango", "apple"];
     console.log(fruit.reverse()); // ['apple', 'mango', 'orange', 'banana', 'apple']

     let numbers = [1,2,3,44,5,6,7,8,99]
     numbers.reverse();
     console.log(numbers); //[99, 8, 7, 6, 5, 44, 3, 2, 1]
     
     ```
   - `reverse` mutates the array in reverse
   - it does mutate the original array

9. `every` 
- Parameter: callback function
   - Return: true / false
   - Example:
     ```js
      function isEven(num){
        return num % 2 === 0;
      }

      let numbers = [1,2,3,4,5,6,7,8,9,10];
      numbers.every(isEven); // false
      numbers.every(function (num){
        return num > 10;
      })

            numbers.every((num) =>{
        return num < 11;
      }); // true
      
      function lessThan10(num, index){
              console.log(num ,index);
              return num <= 10;
      }
      numbers.every(lessThan10);// false
      
     ```
   - `every` checks the entire array for a condition and if all conditions are fullfilled it returns true, if even one condition isnt fullfilled it will return false.
   - it does not mutate the original array

10. `shift`
   - Parameter: shift();
   - Return: the deleted array 
   - Example:
     ```js
     let fruit = ["apple","banana","orange", "mango", "apple"];
     console.log(fruit.shift()); // apple
     console.log(fruit) // (4) ['banana', 'orange', 'mango', 'apple']
     fruit.shift();
     console.log(fruit) // (3 ) ['orange', 'mango', 'apple']

     let numbers = [1,2,3,44,5,6,7,8,99]
     console.log(numbers.shift()); // 1
     console.log(numbers); //(8) [2,3,44,5,6,7,8,99]
     
     ```
   - `shift` deletes the first index of an array and returns the deleted value.
   - it does mutate the original array


11. `splice` 
 - Parameter: splice(start, no.of deletions, newElement); start index, number of elements to be deleted from start index, element to be added (can be upto n)
   - Return: the deleted array 
   - Example:
     ```js
     let fruit = ["apple","banana","orange", "mango", "apple"];
     console.log(fruit.splice(2, 1, "chikku", "pineapple", "raddish")); // [orange]
     console.log(fruit) // (7) ['apple', 'banana', 'chikku', 'pineapple', 'raddish', 'mango', 'apple']
     console.log(fruit.splice(2,3, "orange")); // ["chikku", "pineapple", "raddish"]
     console.log(fruit) // ['apple', 'banana', 'orange', 'mango', 'apple']

     let numbers = [1,2,3,44,5,6,7,8,99]
     console.log(numbers.splice(3)); // [44,5,6,7,8,99]
     console.log(numbers); //(8) [1,2,3]
     
     ```
   - `splice` deletes n number of elements from the start index and can also add or replace new elements from the start index and returns an array of all the ddeleted elements
   - it mutates the original array

12. `find` 
- Parameter: function
   - Return: the first array value to return true, else returns undefined 
   - Example:
     ```js
     let numbers = [1,2,3,44,5,6,7,8,99]
     numbers = [1,2,3,4,5,6,7,8,9,10];
     firstEven = numbers.find((num) => num % 2 == 0)
     console.log(firstEven)// 2
     
     firstOdd = numbers.find((num) => num % 2 !== 0)
     console.log(firstOdd) // 1

     findFive = numbers.find((num => num === 5))
     console.log(findFive); // 5
     ```
   - `find` find uses a function as a parameter to iterate through each value and return the first true value
   - doesnt mutate the original array

13. `unshift`
   - Parameter: newValue
   - Return: the new length of the array
   - Example:
     ```js
     let numbers = [1,2,3,44,5,6,7,8,99]
     console.log(numbers.unshift(69,96));// 11
     console.log(numbers); //  [69, 96, 1, 2, 3, 44, 5, 6, 7, 8, 99]

     let animals = ["lion" ,"tiger", "monkey"];
     console.log(animals.unshift("puppy", "donkey")) // 5
     console.log(animals);// (5) ['puppy', 'donkey', 'lion', 'tiger', 'monkey']
     ```
   - `unshift` it adds new elements to the beggining of the array and returns new lenght
   - does mutate the original array

14. `findIndex`
   - Parameter: function
   - Return: the index of the first  truth value iterated by the function
   - Example:
     ```js
     numbers = [1,2,3,4,5,6,7,8,9,10];
     firstEven = numbers.findIndex((num) => num % 2 == 0)
     console.log(firstEven)// 1
     
     firstOdd = numbers.findIndex((num) => num % 2 !== 0)
     console.log(firstOdd) // 0

     findFive = numbers.findIndex((num => num === 5))
     console.log(findFive); // 4
     ```
   - `findIndex` it finds the index of the first value to return true when every element of the array is itterated from the string
   - doesnt mutate the original array

15. `filter` 
   - Parameter: function
   - Return: all the values to a new array that passed the function test
   - Example:
     ```js
     numbers = [1,2,3,4,5,6,7,8,9,10];
     firstEven = numbers.filter((num) => num % 2 == 0)
     console.log(firstEven)// [2, 4, 6, 8, 10]

     
     firstOdd = numbers.filter((num) => num % 2 !== 0)
     console.log(firstOdd) // [1, 3, 5, 7, 9]

     greaterThanFive = numbers.filter((num => num > 5))
     console.log(greaterThanFive); // [6, 7, 8, 9, 10]
     ```
    - `filter` it returns a new array which is the copy of the original array except filtered by a function. values that return  true are added to the new array.
    - it does not mutate the array

16. `flat`
   - Parameter: number upto how many arrays within the array to flatten, defaults to 1.
   - Return: a new array including all the sub array elements sequencially
   - Example:
     ```js
     let fruit = ["apple", ["bananan", ["orange", "mango"]]];
     fruitSalad = fruit.flat(); //['apple', 'bananan', Array(2)]
     let fruit = ["apple", ["bananan", ["orange", "mango"]]];
     fruitSalad = fruit.flat(2); //(4) ['apple', 'bananan', 'orange', 'mango']
     let colors = ['red', ['green', ['blue', ['orange', 'black', 'white', 'brown']]]];
     console.log(colors.flat(Infinity)); // (7) ['red', 'green', 'blue', 'orange', 'black', 'white', 'brown']
     ```
   - `flat` accepts an array with multiple subarrays and returns a new array with the value of all the subarrays.
   - No it does not mutate the original array

17. `forEach`
   - Parameter: function
   - Return:none
   - Example:
     ```js
     numbers = [1,2,3,4,5,6,7,8,9,10];
     numbers.forEach((num) => console.log(num))
    //1
    //2
    //3
    //4
    //5
    //6
    //7
    //8
    //9
     numbers.forEach((num) => console.log(num + 2))
    //3
    //4
    //5
    //6
    //7
    //8
    //9
    //10
    //11

     numbers.forEach((num => console.log(num*num)));
     console.log(greaterThanFive); 
     //1
     //4
     //9
     //16
     //25
     //36
     //49
     //64
     //81
     //100
     ```
    - `forEach` its main purpuse is to run a function through all the values of an array. it doesnt return a value, but it can log all the results of the function on the indivisualarray values
    - it does not mutate the array

18. `map`
   - Parameter: function
   - Return: a new array with value of the function return after iterating with  the previous array
   - Example:
     ```js
     numbers = [1,2,3,4,5,6,7,8,9,10];
     even = numbers.map((num) =>num % 2)
     console.log(even) // (10) [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]

     newNum = numbers.map((num) => num + 2)
     console.log(newNum) // (10) [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

     squareNum = numbers.map(num =>num*num);
     console.log(squareNum); //(10) [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
    ```
  - `map` it creates a new array and adds all the results of the function iteration through old array
  - doesnt not mutate original array

19. `pop`
   - Parameter: pop();
   - Return: the deleted array 
   - Example:
     ```js
     let fruit = ["apple","banana","orange", "mango", "apple"];
     console.log(fruit.pop()); // apple
     console.log(fruit) // (4) ['apple', 'banana', 'orange', 'mango']
     fruit.pop();
     console.log(fruit) // (3 ) ['apple','banana', 'orange']

     let numbers = [1,2,3,44,5,6,7,8,99]
     console.log(numbers.pop()); // 99
     console.log(numbers); //(8) [1,2,3,44,5,6,7,8]
     
     ```
   - `pop` deletes the last index of an array and returns the deleted value.
   - it does mutate the original array


20. `reduce`
   - Parameter: function, accumilator and current value
   - Return: return a new array using the function that  accumilates the reducer to react with the current vaue and produce a new result, this proceess iterates until we have a final value.
   - Example:
     ```js
     let fruit = ["apple","banana","orange", "mango", "apple"];
     let singleFruit = fruit.reduce((accumilator, currentValue) =>
    accumilator + currentValue + " ", []); // apple banana orange mango apple 

     let numbers = [1,2,3,44,5,6,7,8,99]
     let productOfNumbers = numbers.reduce((accumilator, currentValue) => 
      accumilator * currentValue , 1 ); // 99
     console.log(productOfNumbers); //43908480
     
     ```
   - `reduce` it passes 2 parameters accumilator and a current value through a function. the accumilator is assigned an initial value and from there its passed through the function, the accumilator gets a new value which is again passed through the function but with the next inndex and this process continues untill we get the final value'

  - this method does not mutate the array
  
21. `slice`
   - Parameter: start and end
   - Return: return a new array with extracted elements
   - Example:
     ```js
     let fruit = ["apple","banana","orange", "mango", "apple"];
     let fruitSlice = fruit.slice(3); // (2) ['mango', 'apple']

     let numbers = [1,2,3,44,5,6,7,8,99]
     let slicedNumber = numbers.slice(2, 5) // (3) [3, 44, 5]
     let slicedNumber2 = numbers.slice(2, -5) // (2) [3, 44]
     
     ```
   - `slice` is a copying method that creates an array that is aa shallow copy of the original array with elements between index's extracted
  - this method does not mutate the array

22. `some`
- Parameter: callback function
   - Return: true / false
   - Example:
     ```js
      function isEven(num){
        return num % 2 === 0;
      }

      let numbers = [1,2,3,4,5,6,7,8,9,10];
      numbers.every(isEven); // true
      numbers.every(function (num){
        return num > 5;
      }) // true

            numbers.every((num) =>{
        return num < 3;
      }); // true
      
      function lessThan10(num, index){
              console.log(num ,index);
              return num <= 10;
      }
      numbers.every(lessThan10);// true
      
     ```
   - `sum` checks the entire array for a condition and if even one condition is fullfilled it returns true, if none of the conditions are fullfilled it will return false.
   - it does not mutate the original array
