/*
    print the value from 0 - 10 diff by 1
 */
let result = '';
for (let i=0; i<=10; i++){
    if (i<=9){
        result += `${i} , `;
    }
    else {
        result += `${i}`;
    }
}
console.log(result);


/*
    print the value from 20 - 0 diff 2
 */
result = '';
for (let i=20; i>=0; i-=2){
    if (i>0){
        result += `${i} , `;
    }
    else {
        result += `${i}`;
    }
}
console.log(result);


/*
    nested for loop
    ----------------
    *
    * *
    * * *
    * * * *
    * * * * *
 */
let number = 5;
result = '';
for (let i=1; i<=number; i++){
    for (let j=1; j<=i; j++){
        result += `* `;
    }
    result += `\n`;
}
console.log(result);


/*
    1
    12
    123
    1234
    12345
 */
result = '';
for (let i=1; i<=5; i++){
    for (let j=1; j<=i; j++){
        result += `${j}`;
    }
    result += `\n`;
}
console.log(result);

/*
    1
    22
    333
    4444
    55555
 */
result = '';
for (let i=1; i<=5; i++){
    for (let j=1; j<=i; j++){
        result += `${i}`;
    }
    result += `\n`;
}
console.log(result);

/*
    12345
    1234
    123
    12
    1
 */
result = '';
for (let i=5; i>=1; i--){
    for (let j=1; j<=i; j++){
        result += `${j}`;
    }
    result += `\n`;
}
console.log(result);

/*
    55555
    4444
    333
    22
    1
 */
result = '';
for (let i=5; i>=1; i--){
    for (let j=1; j<=i; j++){
        result += `${i}`;
    }
    result += `\n`;
}
console.log(result);
