Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
    - Parameter: string data type 
    - Syntax : toUpperCase();
    - Return : returns the string in Uppercase
    - Example: 
    ```js
    let string = "i just had breakfast."
    console.log(string.toUpperCase()); // "I JUST HAD BREAKFAST."
    let string2 = "it was french toast"
    console.log(string2.toUpperCase());// "IT WAS FRENCH TOAST"
    let string3 = "it was delicious";
    console.log(string3.toUpperCase());//"IT WAS DELICIOUS"
    ```
    `toUpperCase` returns the string value in upper case


3. `toLowerCase`
    - Parameter: string data type 
    - Syntax : toLowerCase();
    - Return : returns the string in lower case
    - Example: 
    ```js
    let string = "I JUST HAD BREAKFAST."
    console.log(string.toUpperCase()); //"i just had breakfast."
    console.log("MONKEY".toLowerCase());// "monkey"
    let string2 = "IT WAS DELICIOUS";
    console.log(string2.toLowerCase());"it was delicious";
    ```
    `toLowerCase` returns the string value in lower case

4. `trim`
- Parameter: string data type 
- Syntax: trim();
    - Return : returns the string with blank spaces removed from the start and end of the string
    - Example: 
    ```js
    let string = "     I JUST HAD BREAKFAST.     "
    console.log(string.trim()); //"I JUST HAD BREAKFAST."
    console.log("     MONKEY    ".trim());// "MONKEY"
    let string2 = "       K.      ";
    console.log(string2.trim());"K.";
    ```
    `trim` returns the string value with all empty spaces removed from start and end.

5. `trimEnd`
- Parameter: string data type 
- Syntax: trimEnd() or trimRight();
    - Return : returns the string with blank spaces removed from the end of the string
    - Example: 
    ```js
    let string = "     I JUST HAD BREAKFAST.     "
    console.log(string.trimRight()); //"     I JUST HAD BREAKFAST."
    console.log("     MONKEY    ".trimEnd());// "     MONKEY"
    let string2 = "       K.      ";
    console.log(string2.trimEnd());"       K.";
    ```
    `trimEnd` returns the string value with all empty spaces removed from the end of the string.

6. `trimStart`
- Parameter: string data type 
- Syntax: trimStart() or trimLeft();
    - Return : returns the string with blank spaces removed from the start of the string
    - Example: 
    ```js
    let string = "     I JUST HAD BREAKFAST.     "
    console.log(string.trimLeft()); //"I JUST HAD BREAKFAST.     "
    console.log("     MONKEY    ".trimStart());// "MONKEY    "
    let string2 = "       K.      ";
    console.log(string2.trimStart());//"K.      "
    ```
    `trimStart` returns the string value with all empty spaces removed from the start of the string.

7. `concat`
- Parameter: strings to concat with initial string
- Syntax: str.concat(str, str2,....., strn)
    - Return : returns the string concatenated with the extra strings
    - Example: 
    ```js
    let string = "I JUST HAD BREAKFAST"
    console.log(string.concat(" ","IT WAS FRENCH TOAST" )); //I JUST HAD BREAKFAST IT WAS FRENCH TOAST
    console.log(string.concat(string, string, string));// I JUST HAD BREAKFASTI JUST HAD BREAKFASTI JUST HAD BREAKFASTI JUST HAD BREAKFAST
    let string2 = "       K.      ";
    console.log(string.concat(string2));//I JUST HAD BREAKFAST       K.    
    ```
    `concat` returns the string value concatinated with extra strings added in syntax.

8. `endsWith`
- Parameter: the charects of the string to be tested at the end of the string
- Syntax: str.concat(str, str2,....., strn)
    - Return : true/false
    - Example: 
    ```js
    let string = "I JUST HAD BREAKFAST"
    console.log(string.endsWith("BREAKFAST" )); //true
    console.log(string.endsWith("HAD"));// false
    let string2 = "viva la vida";
    console.log(string2.endsWith(vida, 12));//true  
    ```
    `endsWith` returns true or false after checking if the parameters match with the ending of the given string.

9. `includes`
- Parameter: the string to be looked for within the main string
- Syntax: includes(string , position(optional))
    - Return : true/false
    - Example: 
    ```js
    let string = "I JUST HAD BREAKFAST"
    console.log(string.includes("BREAKFAST" )); //true
    console.log(string.includes("had"));// false
    let string2 = "viva la vida";
    console.log(string2.includes(vida, 0));//true  
    ```
    `includes` returns true or false after checking if the parameters match with the given string.

10. `indexOf`
- Parameter: contains 2 arguments 
first argument is the index of the first occurance of a substring within the specified string to be found
second argument is a number the returns the first occcurance of the substring that is greater than or equal to the number
- Syntax: indexof(string , number)
    - Return : index of the string
    - Example: 
    ```js
    let string = "I JUST HAD BREAKFAST"
    console.log(string.indexOf("BREAKFAST")); //11
    console.log(string.indexOf("T", 5));// 5
    console.log(string.indexOf("T", 6));//19  
    ```
    `indexOf` returns the index of the substring searched within the string. and if the substring doesnt exsist returns -1

11. `lastIndexOf`
- Parameter: contains 2 arguments 
first argument is the index of the last occurance of a substring within the specified string to be found
second argument is a number the returns the last occcurance of the substring that is lesser than or equal to the number
- Syntax: lastIndexof(string , number)
    - Return : index of the string from the end
    - Example: 
    ```js
    let string = "I JUST HAD BREAKFAST"
    console.log(string.lastIndexOf("A")); //17
    console.log(string.indexOf("T"));// 19
    console.log(string.indexOf("T", 6));//5 
    ```
    `lastIndexOf` returns the last index of the substring searched within the string. and if the substring doesnt exsist returns -1

12. `padEnd`
- Parameter: contains 2 arguments 
first argument is the target string length
second argument is the padstring defaults to "".
- Syntax: padEnd(finallength , string)
    - Return : the string along with the padding at the end untill it reaches final length
    - Example: 
    ```js
    let string = "itsmemario"
    console.log(string.padEnd(30, "helloyoumario")); //itsmemariohelloyoumariohelloyo
    console.log(string.padEnd(20, "savepeach"));// itsmemariosavepeachs
    console.log(string.padEnd(20, "K."));//itsmemarioK.K.K.K.K.
    ```
    `padEnd` returns a string with final length along with the pad string at the end untill it matches that length

13. `padStart`
- Parameter: contains 2 arguments 
first argument is the target string length
second argument is the padstring defaults to "".
- Syntax: padStart(finallength , string)
    - Return : the string along with the padding from the start untill it reaches final length
    - Example: 
    ```js
    let string = "itsmemario"
    let string2 = "Mario"
    console.log(string.padStart(19, "Hello!! ")); //Hello!! itsmemario
    console.log(string2.padStart(15, "Save peach "));// itsmemariosavepeachs
    console.log(string.padStart(20, "K."));//K.K.K.K.K.itsmemario
    ```
    `padStart` returns a string with final length along with the pad string at the start untill it matches that length

14. `repeat`
- Parameter: number of times the strings needs to be repeated
- Syntax: repeat(number)
    - Return : the string repeated n number of times
    - Example: 
    ```js
    let string = "La"
    let string2 = "HO"
    console.log(`My heart goes Sha${string.repeat(4)}`); //Hello!! itsmemario
    console.log(`brook laughs like Yo${string2.repeat(15)}`);// itsmemariosavepeachs
    console.log("K.".repeat(20));//K.K.K.K.K.K.K.K.K.K.K.K.K.K.K.K.K.K.K.K.
    ```
    `repeat` returns a string repeated n number of times

15. `replace` 
- Parameter: pattern and replacement
- Syntax: replace(pattern, replacement)
    - Return : the string with the pattern replaced by the replacement
    - Example: 
    ```js
    let string = "I am hungry. give me some food"
    let string2 = string.replace("hungry", "thristy")
    console.log(string.replace("hungry", "thristy")); //I am thristy. give me some food
    console.log(string2.replace("food", "drinks")); // I am thristy. give me some drinks
    console.log("K.".replace("K" , "Meh"));//Meh.
    ```
    `replace` replaces the first pattern with the replacement string 

16. `slice`
- Parameter: start index and end index
- Syntax: slice(start index, end index)
    - Return : the string between the start and end index
    - Example: 
    ```js
    let string = "I am hungry. give me some food"
    let string2 = string.replace("hungry", "thristy")
    console.log(string.slice(0, 12)); //I am hungry.
    console.log(string2.slice(12 )); // . give me some food
    console.log(string2.slice(-12 , 20));//m
    ```
    `slice` creates a new string where the original string is sliced between a start index and an end index.

17. `split`
- Parameter: seperator and limit
- Syntax: split(seperator , limit)
    - Return : an array with each index seperated by the seperator not including the seperator and having a length within the limits of the limit
    - Example: 
    ```js
    let string = "I am hungry. give me some food"
    console.log(string.split("g")); //['I am hun', 'ry. ', 'ive me some food']
    console.log(string.split(" ", 4)); // (4) ['I', 'am', 'hungry.', 'give']
    console.log(string.slice("space"));//['I am hungry. give me some food']
    ```
    `split` returns an array split by the seperator, if there is no seperator than it will return the string converted to array.

18. `substring`
- Parameter: start index and end index
- Syntax: split(indexStart , indexEnd)
    - Return : a string starting from start index and ends with not including the end index
    - Example: 
    ```js
    let string = "I am hungry. give me some food"
    console.log(string.substring(2, 8)); //am hun
    console.log(string.substring(2,8)); // am hun
    console.log(string.substring("5, -8"));//I am 
    ```
    `substring` slices a given string between the start and end index but not including the index pf the end index