
const names = ['noyon rahman', 'shakil ahmed', 'nadim hassan durjo'];

let index = -1;
let name = names[++index]
 

setInterval(() => {
    

    // here index and name value change for that reason we use let
    name = names[index++];
    console.log(name, name.length);

    if(names.length === index){
    
        index = 0
    }

}, 1000)


