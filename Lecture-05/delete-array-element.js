const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];



// filter - Immutable
// using filter delete object from array
// const withOutIdThreeItemArray = arr.filter(item => item.id != 3);
// console.log(withOutIdThreeItemArray);


// splice - Mutable
const result = arr.splice(2,1); // result stored deleted Item 
console.log(result); // result stored deleted Item 
console.log(arr); // arr will deleted 3 item

