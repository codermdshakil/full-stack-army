const numbers = [1, 2, 3, 4, 5, 6];

// update array element
numbers[3] = 300;

const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];

// update id:4 value to 400 
// const index = arr.find(item => item.id === 4);
// index.value = 400;


const index = arr.findIndex((v) => {
    return v.id === 4;
})

// update index and value 
// arr[index] = {id:5, value:500};

// console.log(index);
// console.log(arr);


