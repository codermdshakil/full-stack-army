
const students = {
    '323985ae-d3da-4dee-b87d-7f1d5a6e0ca6':{
        id: "323985ae-d3da-4dee-b87d-7f1d5a6e0ca6",
        name: "Md Al-Amin",
        email: "alamin@test.com",
      },
      '84ca1b1b-b087-4c85-9b48-14c204f5e55c':{
        id: "84ca1b1b-b087-4c85-9b48-14c204f5e55c",
        name: "Akib Ahmed",
        email: "akib@test.com",
      },
      '63ecd4d0-2a92-41a5-acbb-cd54450f66dc':{
        id: "63ecd4d0-2a92-41a5-acbb-cd54450f66dc",
        name: "Elias Emon",
        email: "elias@test.com",
      },
};


/**
 * what can we do in Object
 *
 * - Create a new one (easy) - O(1) 
 * - Update - O(1)
 * - Delete - O(1)
 * - Easily Traverse - O(n)
 * - Filter 1.1 - if you have key or id to find the object time complexity will be - O(1)
 *
 */


// traverse students 
// for(const student in students){
    // console.log(students[student].name);
// }


// Id Generator
function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

// create a new student
const std = {
    id:uuidv4(),
    name:'Shakil Ahmed',
    email:'ahmedshakil@gmail.com'
};

students[std.id] = std;
// console.log(students);

// Update
const updatedId =  '84ca1b1b-b087-4c85-9b48-14c204f5e55c';

const updatedobjData = {
    name:'Noyon Rahman',
    email:'noyon@gmail.com',
};

students[updatedId] = {
    ...students[updatedId],
    ...updatedobjData
};

// console.log(students);

// delete

const deletedId = '323985ae-d3da-4dee-b87d-7f1d5a6e0ca6';
delete students[deletedId];
// console.log(students);


// console.log(Object.keys(students));


// Converts object in array using keys, values so that i can use array methods in object

// keys
// -------

// Object.keys(students).forEach((key, idx) =>{
//     // console.log(key, ' ', idx) 
//     const student = students[key];
//     console.log(student.name, student.email);
// })


// values
// -------

Object.values(students).forEach((student) =>{
    console.log(student.name, " ", student.email);
})


