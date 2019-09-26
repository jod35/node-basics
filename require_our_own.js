console.log('starting our app');

const fs =require('fs');

const os =require('os');

var notes =require('./notes'); //accessing the notes files in the same directory requires './'

fs.appendFileSync('jojo.txt','beautiful girl');


//this will also execute the code in the notes.js file presnt inthe same directory