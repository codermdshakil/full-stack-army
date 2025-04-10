
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

const empty = {};

// console.log(!empty); // return false
console.log(Boolean(empty)); // return true





