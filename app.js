//our app should look like this
console.log('Starting app.js');

const fs =require('fs');
const os =require('os');
const _ =require('lodash');

const notes =require('./notes');
console.log(process.argv);

//using process.argv helps us to have a list
//[ '/usr/bin/node', '/home/jon/nodejs_basics/app.js', 'add' ]

// it contains 
// -the executable of the node we use
// -the js file we are running
// -the command argument we are giving


var command =process.argv[2]; //this points to the command we are giving as an argument.

console.log('command : ',command); //logs the command

if (command =='add') {
    console.log('Adding new notes');
    
}
else if (command == 'list') {
    console.log('Listing all notes');
    
}
else if (command == 'read') {
console.log('reading note');
    
}
else if (command == 'remove') {
    console.log('Removing the note');   
}
else{
    console.log('Command not recognized');
}
//operations for a specific command
