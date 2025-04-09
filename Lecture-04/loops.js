
// Loops
// when we need to do one thing multiple time then we use loops

// 1. For loop - when you know how many times to repeat

// for(let i = 1; i<=10;i++){
//     console.log('hello loop in js', i);
// }

// 2. while loop – when you don’t know how many times, but continue until a condition is true

// let i = 1;
// while (i <= 5) {
//     console.log('CEO & Co-Founder Of CoreThree');
//     i++;
// }


// 3. do...while loop – like while, but runs at least once
// let i = 1;
// do {
//   console.log("Student " + i);
//   i++;
// } while (i <= 5);

// 4. for...of – to loop through arrays 
// let fruits = ["apple", "banana", "orange"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }


// for...in – to loop through object properties 

let student = { name: "John", age: 20, grade: "A" };
for (let key in student) {
  console.log(key + ": " + student[key]);
}