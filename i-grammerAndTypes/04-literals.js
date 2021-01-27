/*
Literal
- represents a fixed value
literals include:
         -string literal
         -numberic literal
         -boolean literal
         -object literal
         -array literal
 -literals are simply just values that we as developers add to our code        

*/

//string literal
let car = "Ford";

// numberic literal
let december = 12;

//boolean literal
let tired = true;

//object literal - colon after the key assigns as the value, and each key value pair is separated with a comma
let soup = {
    a:"chicken noodle",
    b:"tomato",
    c:"beef and barley",
}

console.log(soup.b)// dot notation

/*
 -when working with object using dot notation allows us to dig into that object and grab info or data
*/

// array literal
let days = ['monday', 'tuesday', 'wednesday','thursday','friday'];
console.log(days[2])//square bracket notation
console.log(typeof days);// behind the scenes it is viewed as an object because they can hold different data type
/*
- when working with arrays, using square bracket notation allows us to pull a singular value out of array by index number
-when working with indexes, JS will start counting from 0
 - when using the length property, JS will start counting from 1/
 */
console.log(days.length);