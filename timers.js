//in JS we sometimes want to delay funtion execution
//we use setInterval() and setTimeOut()

//setTimeOut()

// setTimeout(()=>{
//     console.log("Hey");
    
// },100);

// this delays the execution of the function for 10 milliseconds

// In case we have a function with params
// const myFuntion =(name,age)=>{
//     console.log(`My name is ${name} and I am ${age}`);
    
// }

//if we are to set a Timeout,
// setTimeout(myFuntion,2000,"Jonathan",30); //this function runs after 2000 milliseconds
//My name is Jonathan and I am 30



//setInterval() function is quite different

const myFuntion=(name,age)=>{
   console.log(`My name is ${name} and I am ${age} years old.`);
};

setInterval(myFuntion,100,"Jonathan",21); //this runs every after 2000 milliseconds and doesnt stop

clearInterval(id);

