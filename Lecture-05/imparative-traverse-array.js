const numbers = [1, 6, 3, 8, 3, 7, 9, 4];

//1. when we traverse using loops its called imparative traverse

// let sum = 0;
// for(let i = 0; i < numbers.length;i++){
//     sum += numbers[i];
//     // console.log(numbers[i]);
// }
// // console.log('sum = ', sum);

//2. traverse array element using methods called declarative traverse
// -------------------------------------------------------------------------- 
// declarative way traverse using like - forEach, for of, map etc..

// forEach provides 3 elements first array element, second array element index, third full array
// numbers.forEach((element, idx, arr) => {
//     console.log(`Value : ${element} index is ${idx} and full array is ${arr}`);
// })

// when you just need value
// numbers.forEach((value) => {
//     console.log(value);
// })

// when you just need index
// numbers.forEach((_, index) => {
//     // console.log(index);
// })

// when you just need arr
// numbers.forEach((_, __, arr) => {
//     console.log(arr);
// })

// numbers.forEach((value , index, arr) => {

//     if(value%2 === 0){
//         console.log("Event value = ",value);
//     }
//     else{

//         console.log("Odd value = ",value);
//     }
// })

let sum = 0;

//  Inside first 3 element event element sum
numbers.forEach((value, i) => {
  if (value % 2 === 0 && i <= 5) {
    sum += value;
  }
});

console.log(sum);
