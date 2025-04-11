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

console.log(noteBook);

// {
//     shakil: { name: 'shakil' },
//     noyon: { name: 'noyon' },
//     nadim: { name: 'nadim' },
//     hasan: { name: 'hasan' }
//   }


// ✅ When to use reduce()?
// - When you want to:
// - Get a total (sum, product, etc.)
// - Build a new object
// - Flatten arrays
// - Count things