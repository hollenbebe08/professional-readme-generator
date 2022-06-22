//define the file system so that writeFile is able to use it
const fs = require('fs');
const generatePage = require('./src/page-template.js');

//make node responsive and add the initial array for the data
const readmeDataArgs = process.argv.slice(2, process.argv.length);
const[name, github] = readmeDataArgs;


fs.writeFile('README.md', generatePage(name, github), err =>{
    if (err) throw new Error(err);
    console.log("README was created!");
})