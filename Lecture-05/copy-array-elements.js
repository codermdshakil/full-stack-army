
const numbers = [1,2,3,4,5,6,7,8,9,10];

// 1 way to copy array
const copyNumbers = [...numbers];
// console.log(copyNumbers);

// 2 way to copy array
const copySecond = numbers.slice();
// console.log(copySecond);

// 3 way to copy array 
const copyThird = Array.from(numbers);
// console.log(copyThird);


// 4 way to copy array
// const original = [1, 2, 3];
// const copy = [].concat(original);
// console.log(copy);

const original = [1, 2, 3];
const copy = original.map(x => x);
// console.log(copy);










