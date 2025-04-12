const treasures = [3, 5, 2, 7];

const totalCoins = treasures.reduce((bag, coin) => {
  return bag + coin;
});

// console.log(totalCoins); // 17

// summary
// bag = accumulator/ magic bag
// coins = current item / current value
// 0 = starting value of the bag

const names = ["shakil", "noyon", "nadim", "hasan"];

// Convert array to object
const noteBook = names.reduce((book, name) => {
  book[name] = { name: name };
  return book; // book is a array of names
}, {});

// console.log(noteBook);

// {
//     shakil: { name: 'shakil' },
//     noyon: { name: 'noyon' },
//     nadim: { name: 'nadim' },
//     hasan: { name: 'hasan' }
//   }

// My Reduce function

function myReduce(array, cb, init){
  let acc = init;
  for(let i = 0; i < array.length; i++){
    acc = cb(acc, array[i], array, i, array);
  }
  return acc;
}


const result = myReduce([1,2,3,4], ((a, b) => a + b), 0);
// console.log(result);
const arr = [1,2,'', false, 3, NaN, false, 4,5,NaN, 6];

const result1 = myReduce(arr, ((acc, cur) => {

  if(cur){
    acc.push(cur.toString())
  }
  return acc;

}), []);

console.log(result1);


// ✅ When to use reduce()?
// - When you want to:
// - Get a total (sum, product, etc.)
// - Build a new object
// - Flatten arrays
// - Count things