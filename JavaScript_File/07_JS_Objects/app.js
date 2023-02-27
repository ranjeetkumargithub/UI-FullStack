// JavaScript Object
let camera = {
    brand : 'Canon',
    price : 35000,
    color : 'black',
    mfg : 2019
};
console.log(camera);

// access the properties of an object
console.log(camera.brand);

//access the non-existing property
console.log(camera.megaPixel);  //undefined

//access the properties using dot , [] notation
console.log(camera.price);  // 35000
console.log(camera['price']); //35000

// for dynamic properties dot , [] notation
let prop = 'color';
console.log(camera.prop);
console.log(camera[prop]);

// nested object
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    address : {
        street : 'Jubilee Hills',
        city : 'Hyderabad',
        state : 'TS'
    }
};
// access an object
console.log(student);
// access nested object
console.log(student.address);

// access the properties of an object
console.log(student.address.street);

// CURD operations with an object

// CREATE Operation
let mobile = {};

mobile.brand = 'Apple';
mobile.color = 'Silver';
mobile.price = 35000;
mobile.isInsured = false
console.log(mobile);

// READ operation
console.log(mobile.brand);  //Apple

// UPDATE operation
console.log(mobile.price);  // 35000
mobile.price = 45000;
console.log(mobile);

// DELETE operation
delete mobile.isInsured;
console.log(mobile);