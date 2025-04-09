const fruits = ["apple", "banana", "orange", "mango", "watermelon"];

// access value from array
// ------------------------

// console.log(fruits[0]);
// const index = 3;
// console.log(fruits[index]);

// copy array
// const fruitsElements = [...fruits, 'pipeapple'];
// console.log(fruitsElements);
// console.log(fruits);

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// Modify array element
// ----------------------- 

// fruits[0] = "Komola";
// const fruitsElements1 = [...fruits];
// const fruitsElements2 = ["Boroi", ...fruits, "lecho"];

// array methods 
// -----------------

const students = ["Ali", "Sara", "John", "Lina"];

students.push('shakil');   // add item at last to array
// students.pop();         // remove item from last of array
students.unshift('noyon'); // add item to first of array 
// students.shift();          // remove item from frist an array
// console.log(students.length); // give me the length of array
// console.log(students.includes('shakil')); // if element exist in array give me true otherwise give me false
// console.log(students.includes('noyon', 0)); // check this element exist or not
// console.log(students.join(',')); // convert array element to string
// const studentPart = students.slice(1,3); // using slice you can get a copy a specific porsion
// students.splice(1, 0, 'nam jani na'); // remove, add element in array 
// console.log(students);
// students.reverse(); // reverse an array
// console.log(students);

const numbers = [1, 3,5,9,8,2,0];

// sort accending order
const compare = (a, b) =>a - b; 
// sort dessending order
const compareDessen = (a, b) =>b - a; 

// numbers.sort(compare);
// numbers.sort(compareDessen);
// console.log(numbers);


// array methods 

// Method	            Use
// ---------------------------------- 
// push()	            Add to end
// pop()	            Remove from end
// unshift()	        Add to beginning
// shift()	            Remove from beginning
// includes()	        Check if value exists
// indexOf()	        Get index of item
// join()	            Turn array into string
// slice()	            Copy a portion
// splice()	            Add/remove items
// reverse()	        Reverse order
// sort()	            Sort items
// map()	            Create new array with changes
// filter()	            Get items that match a condition
// forEach()	        Do something for every item
// reduce()	            Turn array into a single value


// when should i use Array - Ploral elements
// when should i use Object - singular element


// array problem

// when we store persons data and we need to access person email so i need to remind email element index

const persons = ['shakil', 20, 'shakil@gmail.com'];

const sentEmail = email => {
    console.log('oi mia kaj koren taratari to ', email);
}

// here i have to remain index 2 what why it's a problem
// sentEmail(persons[2])


// how to solved this problem ? here comes object to solved this problem 

const personObj = {name:'Shakil', age:20, email:'ahmed@gmail.com'};

// here we can easily use persobObj.email here we don't need to keep in mind the index value 
sentEmail(personObj.email)


