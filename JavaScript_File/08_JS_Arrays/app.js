//creation of an array
let numbers = [10, 20, 30];
console.log(numbers);
console.log(typeof numbers);

//access the elements of an array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//access the non-exixting
console.log(numbers[3]); //undefined

// iteration of array elements
let colors = ['white','black','silver','purple','blue','yellow'];

// 1. normal for-loop
let result = '';
for (let i=0; i<=colors.length-1; i++){
    console.log(colors[i]);
    result += `${colors[i]} `;
}
console.log(result);

// 2. for-in loop upto ES5
result = '';
for (let index in colors){
    console.log(index); // index value
    result += `${colors[index]} `;
}
console.log(result);

// 3. for-of loop from ES6
result = '';
for (let color of colors){
    result += `${color} `;
}
console.log(result);

// 4. forEach function upto ES5
result = '';
colors.forEach(function (color) {
    result += `${color} `;
});
console.log(result);

// 5. forEach with Arrow function from ES6
result = '';
colors.forEach((color) => {
    result += `${color} `;
});
console.log(result);

// array of objects
let employees = [
    {
        id : 1,
        name : 'John',
        age : 40,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 2,
        name : 'Wilson',
        age : 46,
        designation : 'Sr.Manager',
        isActive : false
    },
    {
        id : 3,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true
    },
    {
        id : 4,
        name : 'Laura',
        age : 28,
        designation : 'Tech Lead',
        isActive : true
    },
    {
        id : 5,
        name : 'David',
        age : 26,
        designation : 'Software Engineer',
        isActive : true
    }
];

// access all employees
console.log(employees);
console.log(employees[0]);
console.log(employees[0].name);

// iterate employees
result = '';
for (let employee of employees){
    result += `${employee.name} `
}
console.log(result);

// filter the junior employees : age <= 30
console.log(employees);
let juniorEmployees = [];
for (let employee of employees){
    if (employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// filter active employees : isActive : true
let activeEmployees = [];
for (let employee of employees){
    if (employee.isActive === true)  // if(employee.isActive)
    {
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);


