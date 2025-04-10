
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
console.log(Object.keys(microphone));
console.log(Object.values(microphone));



