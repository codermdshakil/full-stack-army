
// const numbers = [1,2,3,4, false, '',NaN, 5, 6];

// const filteredNumber = numbers.filter((v) => v);
// const strs = filteredNumber.map((v) => v.toString());

// shortcut // here save memory
// const strs = numbers.filter((v) => v).map((v) => v.toString())
// console.log(strs);


// Reduce

// const numbers = [1,2,3,4,5,6,7];
// const sum = numbers.reduce((a,b) => a+ b);
// console.log(sum);



const numbers = [1,2,3,4, false, '',NaN, 5, 6];

// const result = numbers.reduce((acc, cur, idx) => {
//     if(idx == 0) {
//         acc+= '['
//     }
//     if(cur){
//         acc += cur.toString() + (idx < numbers.length - 1 ? ', ': '');
//     }
//     if(idx == numbers.length-1) {
//         acc+= ']'
//     }
//     return acc;
// }, '');

// console.log(result);  // [1,2,3,4,5,6];


// const result1 = numbers.reduce((acc, cur) => {

//     if(cur){
//       acc.push(cur.toString());
//     }
//     return acc;
// }, []);

// console.log(result1);


// Optimaization reduce, map and filter

const nums = [];
for(let i = 1; i <= 5000000; i++){
    nums.push(i);
}


// using map, filter
console.time('non-optimaized')
nums.filter((v) => v%2==0).map((v) => v*2)
console.timeEnd('non-optimaized')


// using reduce
console.time('Optimaized')
nums.reduce((acc, cur) => {

    if(cur%2==0){
        acc.push(cur*2)
    }
    return acc;

}, []);

console.timeEnd('Optimaized')
