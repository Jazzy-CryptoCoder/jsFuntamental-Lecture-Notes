console.log(3==3); //true
console.log('3'==3);//true
/*
-coersion is the process of convertion a valuse from one type to another
-JS assumes that you made a mistake and that we do want to compare two values that are the same datatype
*/

//strict equal this overrides JS coersion
console.log(3===3);//true
console.log('3'===3);//false

//not equal
console.log('3' != 3);//false

//strict no equal
console.log('3'!== 4)//true

//greater than
3 > 2; //true

//less than
2 > 3; // true

// greater than or equal to
3 >= 2; //true - not to be confused with fat arrow function(=>)

//less than or equal to
2 <= 3; // true

//and- checks if multiple values are true or false
2 && 3 ;//
let x = 5
let y = 6

if (x >= 1 && y >= 1){
    console.log('true')
}
// or - allows to check multiple values, but only one of the values needs to be true
2||3;
