
const microphone = {
    brand:'Fifine',
    indicator:true,
    price:8000,
    color:'Black',
    startRecording:() => {
       console.log('Start Recording!');
    },
    stopRecording:() => {
       console.log('Stop Recording!!');
    }
}


// Method
// microphone.startRecording() 

// Function
// function start(){
//     console.log('start');
// }


// There are two different part's of a object

// 1. Noun / Adjective (state/data/property.field)
// 2. Verb -> kaj : Method (Functionalities -> start, stop)



// Create object using Object
// console.log(microphone.toString());
const testObj = new Object();
testObj.name = "Shakil Ahmed"
// console.log(testObj);



// if i freeze any object that means next time i can't modify this object
// Object.freeze(microphone);

// keys and values values return in a array

// console.log(Object.keys(microphone));
// console.log(Object.values(microphone));
// console.log(Object.entries(microphone));  // return object properties in a array of array

// keys take another way
// for(let k in microphone){
//     // k gives keys and microphone[k] gives values 
//     console.log(k, microphone[k]);
// }


// Notation

// dot notation 
// console.log(microphone.brand);

// array notation
// console.log(microphone['brand']);

// const empty = {};

// console.log(!empty); // return false
// console.log(Boolean(empty)); // return true


// When I need array and when I need object?

// ✅ When to use an Array
// - Use arrays when:
// - Order matters
// - You just need a list of items
// - You're going to loop over items
// Example:
// const tasks = ["task1", "task2", "task3"];


// ✅ When to use an Object
// - Use objects when:
// - You need named properties
// - You want to represent a real-world entity
// - You need key-value access
// 
// Example:
// const user = {
//     name: "John",
//     age: 25,
//     email: "john@example.com",
//   };



// 🔚 Final Summary
// - You can do CRUD on arrays.

// But when you want to:
// - Describe something with named attributes
// - Make your code readable and maintainable
// - Represent real-world data (user, product, post, etc.)
// 👉 Use Objects.






