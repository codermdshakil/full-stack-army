
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


// array  element finding time - 
// console.time('arra')
// const id = 4999999;
// const obj = arr.find(item => item.id === id);
// obj.value = '555';
// console.timeEnd('arra')

console.time('array-first-element-added')
// using unshift added value in fast of array
arr.unshift({
    id:5000000,
    value:5000000
});
console.timeEnd('array-first-element-added')

// object element finding time

// console.time('object')
// const id2 = 4999999;
// const obj2 = arrayToObject[id2];
// obj2.value = 'changed';
// console.timeEnd('object')


console.time('Add-element-in-fast-of-object : ')
arrayToObject[0] = {id:5000000, value:5000000};
console.timeEnd('Add-element-in-fast-of-object : ')


// Time Differents for add element in last of array and object
// ---------------------- 
// arra: 111.649ms
// object: 0.027ms 
 

// Time Differents for add element in first of array and object
// -------------------------------------------------------------
// array-first-element-added: 21.418ms
// Add-element-in-fast-of-object : : 0.016ms
