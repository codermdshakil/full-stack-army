
const user = {
    name:'Shakil Ahmed',
    age:20,
    email:'ahmedshakil@gmail.com'
};

// Create 
user.phone ='01729000000';

// Read
console.log(user.name); // Shakil Ahmed

// Update
user.email = "ahmedshakil0512@gmail.com";


// Delete
delete user.phone;

console.log(user);
