/*
Booleans: only have two possible values (true/false)

*/
let on = true;
console.log(on)

let off = false;
console.log(off);

/*
Null: is an empty value. It is an empty container. Nothing is in it, still exists as a space to fill

*/
let empty = null;
console.log(empty);

/*
UNDEFINED: no value is assigned and does not act like an empty container
*/
let undef;
console.log(undef)

/*
NULL VS UNDEFINDED:
 NULL: is like container with nothing in it
 UNDEFINED: variable has not been initialized

*/

/*
Numbers: numbers are just numbers. Don't need to write anything special in JS
*/
let degrees = 90;
console.log(degrees)

let precise = 999999999999999;// 15 9's
console.log(precise); // 15 9's

let rounded = 9999999999999999
console.log(rounded); // 16 9s: JS gives you space for 15 9's before rounding up
 let notQuite = 0.2 + 0.1;
 console.log(notQuite);// JS rounds out at a certain number.so if you need math beware!

 let numbersAreHard = (0.2 * 10 + 0.1 *10) /10;
 console.log(numbersAreHard);

 /*
 Strings: are dataType that represent text and are wrapped in ('') , or ("")
 */

 let stringOne = " Oh hi Mark";
 let stringTwo = 'oh hi Mark';

/*
numbers vs strings
*/
let first = 1050 + 100;
let second = "1050" + "100"; //string cocatonation
console.log(first);// number
console.log(second); // string

/*
Objects: used to store multiple values. also they can hold key value pairs
*/


/*
Arrays:  are containers that hold lists of items
  - denoted by []
  -dont have to be the same dataType
 */

 let list = [ "item1", undefined, "3"]
 //   (1)   (2)         (3)
 /*
 1) name of the array or list;
 2) array's use square brackets
 3) each item, regardless of dataType and is separated by commas
 */

 let burritos = ["large", 4 , true]
 console.log(burritos);
 console.log( typeof burritos)

/*
-when JS sees that we're trying to combine two or more numbers, it adds those numbers together as a math functionality
-when JSS sees us trying to ass together one or more stings, instead of using the built in math functionality, it combines two strings instead without synthesizing the value.
*/
let example = 1050 + "100";// coersion JS assuming that the user is trying to conncatonate two strings
console.log(example);

console.log(typeof example);// checks the type of value


/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/ 
let firstName = "Jasmine";
let lastName = "Rarugal";
let houseNumber = 1111;
let street = "Hope Road";
let city = "Indianapolis";
let state = "IN";
let zipcode = 46208;
console.log(houseNumber,street,city,state,zipcode);

/*
  String properties:
 - Properties are qualities that are associated with a data type
*/
let myName = "Jasmine";
console.log(myName.length);//6

/* string methods:
 - methods are tools that help us manipulate the date
 -properties(.)/ methods start with(.) but ends with (=)
 *no parentheses for properties
 */

 let myNameIs = jasmine
 console.log(myNameIs.toUpperCase())// method that chages a string to uppercase

let hometown = "my hometown is greenwood";
console.log(hometown.includes("greenwood")); //method that checks if a certain string is included in another string. it is case sensitive


// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = " This sentence will be split into individual parts";
console.log(sent.split("",3));