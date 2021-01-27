/*
Notes:
-variables are named containers for storing data values and referring to later( we name them whatever we want.)
- a variable name must begin with a letter, _, or $
- nunbers may follow the above charaters, but cannot come first
-JS is case sensitive-"Hi," and "hi," would be different variables
-no spaces are allowed in variable names
-camelCase is best practive for naming variables
-sname_Case,PascalCasing
-this is good practice because it keeps everything readable"let myName= 'Jasmine'
*/
//a is the variable.
let a= 2;
//2 is the value
let      b     =   2;
/* (1)  (2)   (3)  (4)
 1.keyword
 2.Variable name ( you can name this whatever you want but keep it relevant to the data that they are holding whenever possible)
 3.Assignment operator
 4. variable value

 var, let, and const:

 -var: 'old' keyword for variables ** In this course we won't be using this keyword as often.

 -let:'new' keyword for variables ** for now this is the best practice.

 -const- also 'new' declares an unchangable variables.

*/
/*
Notes:
-declarations: are on tthe LEFT SIDE of  a variable
  -it is simple: let x
  -declarations are on the left side of the assignment operator
  -initialization: are on the RIGHT SIDE of a variable
    -its sets the value of the variable
    -it incorporates the variable name (x), the assignment operator(=),
    and the value (10) => x = 10

 */
let x;
console.log('Delaration',x)

x = 10;
console.log("Initialize:", x);

x = 33;
console.log("re-initialize:",x);

let y = "Hello";
console.log("Both:", x,y)

let today = "Great!";
const elevenFifty = "wonderful!";
console.log(today,elevenFifty)

today = "lovely";
elevenFifty = "fantastic"
console.log(today,elevenFifty)

