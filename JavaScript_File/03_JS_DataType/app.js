/*
    JS data types
    --------------
    the type of data which we can assign to a variable

    1. Number -> any number
    2. String -> any text data
    3. Boolean -> true, false
    4. undefined
    5. null
 */

// String
let employeeName = 'John';
console.log(employeeName);
console.log(typeof employeeName);
console.log(`Value : ${employeeName} , Type : ${typeof employeeName}`);

// Number
let employeeAge = 40;
console.log(`Value : ${employeeAge} , Type : ${typeof employeeAge}`);

//Boolean
let isManager = true;
console.log(`Value : ${isManager} , Type : ${typeof isManager}`);

//undefined
let name; //variable declaration
console.log(name);
console.log(`Value : ${name} , Type : ${typeof name}`);

// null (dummy value)
let test = null;
console.log(`Value : ${null} , Type : ${typeof null}`);

// Re-Assignment is allowed
let abc;
abc = 10;
abc = 'raju';
console.log(`Value : ${abc} , Type : ${typeof abc}`);
