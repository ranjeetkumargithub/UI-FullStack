// print from 0 - 10 diff 1
function printNumbers() {
    let result = '';
    for (let i=0; i<=10; i++){
        result +=`${i} `;
    }
    console.log(result);
}
printNumbers(); // function call / execution

// function parameter
function printNumber(endNumber) {
    result = '';
    for (let i=0; i<=endNumber; i++){
        result +=`${i} `;
    }
    console.log(result);
}
printNumber(50); // function call / execution
printNumber(100); // function call / execution

// with two parameter
function printNumberss(startNumber, endNumber) {
    result = '';
    for (let i=startNumber; i<=endNumber; i++){
        result +=`${i} `;
    }
    console.log(result);
}
printNumberss(10,50); // function call / execution

// with custom increment
function printNumberr(startNumber, endNumber, increment) {
    result = '';
    for (let i=startNumber; i<=endNumber; i +=increment){
        result +=`${i} `;
    }
    console.log(result);
}
printNumberr(10,50, 5); // function call / execution





// function without parameter
function greet() {
    console.log('Good Morning');
}
greet();

// function expression
let greetMe = function (){
    console.log('Good Morning');
}
greetMe();

// function with parameter
let wishMe = function (name,age){
    let message = `Hello ${name} You are ${age} yrs old`;
    console.log(message);
}
wishMe('John',40);
wishMe('John');
wishMe();

// function with return type
let sum = function (a,b){
    let result = 2 * (a + b);
    return result;
}
let output  = sum(10,20);
console.log(output);


// function with an object as a parameter
let printObject = function (obj) {
    console.log(obj);
}
printObject({name : 'Rajan' , age : 20});

let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};
printObject(mobile);


// function with an array as a parameter
let printArray = function (array) {
    let result = '';
    for (let index in array){
        result += `INDEX : ${index} => VALUE : ${array[index]} \n`;
    }
    console.log(result);
};
printArray([10,20,30,40]);

let colors = ['white','black','orange','purple'];
printArray(colors);


// function inside an object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function (){
        return 'Arjun Reddy';
    }
};
console.log(student);
console.log(student.firstName);
console.log(student.lastName);
console.log(student.fullName);
console.log(student.fullName());

// function inside an object with 'this' keyword
let students = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function (){
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(students.fullName());


// nested function
let outerFn = function (){
    console.log('I am an Outer Function');
    let innerFn = function (){
        console.log('I am an Inner Function');
    }
    innerFn();
};
outerFn();


// twisted function
let twistedFn = function (){
    let name = 'John';
    let printStudent = function (){
        let student = {
            name : 'Rajan',
            age : 20,
            course : 'CSE'
        };
        return student;
    };
    return printStudent;
};
let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj);
console.log(studentObj.name);
