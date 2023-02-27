/*
    let -> keyword to declare a variable
    a -> variable name / reference variable
    = -> assignment operator
    10 -> value / data
    ; -> end of the statement
 */

let a=10;
let b=20;
let sum = a+b;
console.log(sum);
console.log('The Sum of a,b is: ' + sum);
console.log('The Sum of ' + a + ' , ' + b + ' is : ' + sum); //ES5

// ES6 -> Template String / template literal (``) back tick
console.log(`The Sum of ${a} , ${b} is : ${sum}`); //ES6

// Rules for Variable Declarations :
    /* 1. All variables are case sensitive
        ex: let name = 'raj';
        console.log(Name); ->Error

        2. All Variable name must be in camelCase
        ex: let myEmployeeName = 'John';

        3. max allowed chars 15

        4. chars allowed are a-z, A-Z, $, _, 0-9
            but variable must not start with number
     */
