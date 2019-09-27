console.log('starting our app');

const fs =require('fs');

const os =require('os');

var notes =require('./notes'); //accessing the notes files in the same directory requires './'

var user=os.userInfo();

//this will also execute the code in the notes.js file presnt inthe sam

// fs.appendFile('hellojon.txt',`Hello ${user.username}, You are ${notes.age} years old`,function(err){
//     if(err){
//         console.log('Unable to write the file');
        
//     }
// });

// fs.appendFile('hellojon.txt',`Your current grade is ${notes.grade}!`,function(err){
//     if(err){
//         console.log('Unable to write the file');
//     }
// });

console.log('starting the notes app');

modules.export.addNote = ()=>{
    console.log("Add Note");
    
}
