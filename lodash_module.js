var os =require('os');
var fs =require('fs');

const _ =require('lodash');

//lodash has many utilities that help us to find out the data type of a specific variable.

// //lodash.isString 
// console.log(_.isString(true));
// //returns false
// console.log(_.isString('Jonathan'));
// //returns true

//lodash.uniq

//this returns an array with no duplicates

const myArray=['Jovia',1,2,3,'Jovia']
console.log(_.uniq(myArray));

//returns [ 'Jovia', 1, 2, 3 ]

//the other module is 'nodemon' which is a commandline utilty that helps us to do live reloads on saving



