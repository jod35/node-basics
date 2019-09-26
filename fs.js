//accessing the file system with node

//(1) fs.appendfile

//we first require it from fs

const fs =require('fs');

// fs.appendFile('Iloveyou.txt','I am in love with coding !!!',function(err){
//     if (err){
//         console.log('Unable to do the task bro!!');
//     }
// });

fs.appendFileSync('iloveyou.txt','Hello my code!!'); //this works the same way but doesnot require a call back function


