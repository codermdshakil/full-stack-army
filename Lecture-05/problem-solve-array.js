let arr = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

// get just numbers element from array Imperative way

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length - 1; j++) {
//     if (!arr[j] || typeof arr[j] !== "number") {
//       arr[j] = arr[j + 1];
//       arr[j + 1] = undefined;
//     }
//   }

//   if (arr[i] === undefined) {
//     count++;
//   }
// }

// arr.length -= count;

// // console.log(arr);

// // Solved this problem using declarative way 
// const filteredNumebrs = arr.filter(v => typeof v === 'number')
// console.log(filteredNumebrs);


function fib(n){
    if(n == 0 || n==1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

const result = fib(11);
console.log(result);