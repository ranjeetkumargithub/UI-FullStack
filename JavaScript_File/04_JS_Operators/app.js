/*
    JS Operators
    -------------
    -->Assignment Operators: =
    -->Arithmetic Operators : + - / * %
    -->Short hand Math Operators : += , -= , /= , *=
    -->Conditional Operators : < , > , <= , >= , !==
    -->Unary Operators : ++ , --
    -->Logical Operators : && , || , ^
    -->Ternary Operators : ?:
    -->Equality Operators : == , ===
 */

// Assignment Operators: =
let test = 10;
console.log(test);

// Arithmetic Operators : + - / * %
let num1 = 10;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sum : ${num1 - num2}`);
console.log(`Sum : ${num1 * num2}`);
console.log(`Sum : ${num1 / num2}`);

// find the number is even or odd
let number = 12;
if (number % 2 === 0){
    console.log(`${number} is an Even Number`);
}
else {
    console.log(`${number} is an Odd Number`);
}

// Short hand Math Operators : += , -= , /= , *=
let a = 20;
let b = 30;
let add = 10;
add = add + (a + b); // 10 + 20 + 30 => 60
add += (a + b); // 60 + 20 + 30 => 110
console.log(add);

// Conditional Operators : < , > , <= , >= , !==
let mark = 75;
if (mark <= 35){
    console.log('You Failed the Exam');
}
else {
    console.log('You Cleared the Exam');
}

// Unary Operators : ++ , --
let x = 10;
x = x+1;
x += 1;
x++;
console.log(x);

// Logical Operators : && , || , ^
let inRelation = true;
let parentAgreed = false;
if (inRelation && parentAgreed){
    console.log('Get Marry Soon');
}
else {
    console.log('Wait until the parentsAgreed');
}

// Ternary Operators : ?:
    /*
        syntax : (condition) ? true : false;
     */
mark = 65;
let message = '';
(mark <= 35) ? message = 'You cleared the Exam' : message = 'You failed the Exam';
console.log(message);

// Equality Operators : == , ===
a = 10;
b = '10';
if (a === b){
    console.log('Both are equal');
}
else {
    console.log('Both are not equal');
}