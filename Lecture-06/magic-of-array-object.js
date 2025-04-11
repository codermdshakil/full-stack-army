
const arr = [];
const arrayToObject = {};

for(let i = 0; i< 5000000; i++){
    const template = {
        id:i,
        value:i
    }
    arr.push(template);
    arrayToObject[i] = template;
};


// ** array  element finding time


// * Array *

// console.time('arra')
// const id = 4999999;
// const obj = arr.find(item => item.id === id);
// obj.value = '555';
// console.timeEnd('arra')

// ** add element to the first of array 

// console.time('array-first-element-added')
// // using unshift added value in fast of array
// arr.unshift({
//     id:5000000,
//     value:5000000
// });
// console.timeEnd('array-first-element-added')


// ** delete array elment
console.time('array delete item ');
const idx = arr.findIndex(item => item.id === 4000000);
arr.splice(idx, 1); // delete item
console.timeEnd('array delete item ');



// * Object*

// ** object element finding time
// console.time('object')
// const id2 = 4999999;
// const obj2 = arrayToObject[id2];
// obj2.value = 'changed';
// console.timeEnd('object')

// ** add element to the first of object 
// console.time('Add-element-in-fast-of-object : ')
// arrayToObject[5000000] = {id:5000000, value:5000000};
// console.timeEnd('Add-element-in-fast-of-object : ')

// ** delete object item
console.time('Object Delete time : ')
delete arrayToObject[4000000];
console.timeEnd('Object Delete time : ')
















// Time Differents for add element in last of array and object
// ---------------------- 
// arra: 111.649ms
// object: 0.027ms 
 

// Time Differents for add element in first of array and object
// -------------------------------------------------------------
// array-first-element-added: 21.418ms
// Add-element-in-fast-of-object : : 0.016ms


// Time differents delete element from array and object
// array delete item : 89.767ms
// Object Delete time : : 0.94ms
