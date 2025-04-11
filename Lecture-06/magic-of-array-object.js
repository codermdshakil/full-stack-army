
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
console.time('arra')
const id = 4999999;
const obj = arr.find(item => item.id === id);
obj.value = '555';
console.timeEnd('arra')

// object element finding time

console.time('object')
const id2 = 4999999;
const obj2 = arrayToObject[id2];
obj2.value = 'changed';
console.timeEnd('object')


// Time Differents
// ---------------------- 
// arra: 111.649ms
// object: 0.027ms 
 