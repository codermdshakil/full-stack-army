const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// console.log(sum);  // Output: 15
const max = numbers.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue: accumulator;
})

// console.log(max);


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
  // If the fruit is already in the accumulator, increase its count, otherwise set it to 1
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});  // Initial value is an empty object

console.log(fruitCount);  // Output: { apple: 3, banana: 2, orange: 1 }



// When to Use reduce()
// - When you want to transform an array into a single value (like a sum, object, or array).
// - When you need a clean and functional approach to aggregate or manipulate data.
// - Let me know if you'd like to dive deeper into any specific use case!

