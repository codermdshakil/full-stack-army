// Condition is a brain of a computer

// Snenario - 1 : single branch - if condition
// const money = true;
// if(money){
//     console.log("i will invest on my self development");
// }


// Sneario - 2 :  two branch - if else condition

// const money = 500;

// if(money >= 500){
//     console.log('I will buy  a book');
// }
// else{
//     console.log('I will save it so that next time i can buy books');
// }


// Senario - 3 : Multiple Branch - if, else if, else

const point = 31;
if(point >= 80 && point <= 100){
    console.log("A+");
}
else if(point >= 70 && point <= 79){
    console.log("A");
}
else if(point >= 60 && point <= 69){
    console.log("A-");
}
else if(point >= 50 && point <= 59){
    console.log("B");
}
else if(point >= 40 && point <= 49){
    console.log("C");
}
else if(point <= 32){
    console.log("You Fail");
}
else{
    console.log("Input valid point");
}




