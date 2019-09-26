//The OS module
//this helps us to work with our file system

//os.userInfo([options])
//gives information about the currently logged in user such the username

// const os =require('os');
// const fs =require('fs');

// var user =os.userInfo();

// console.log('starting the app');
// fs.appendFile('greetings.txt','Hello ' + user.username + ' !',function(err){
//     if(err){
//         console.log('Unable to write the file');
//     }
// });

// //returns 'Hello jon' but gives an error if no call back function is given to it



//this also works

console.log('Starting the app');
 const os =require('os');
 const fs =require ('fs');

 var user = os.userInfo();

 fs.appendFileSync('greetings.txt',`Hello ${user.username}!`);

 //in this we used the template string feature in ES6
 //it also writes 'Hello jon' to the same greetings.txt file 

