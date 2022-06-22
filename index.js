const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

inquirer
.prompt([
    {  
    type: 'input',
    name: 'name',
    message: 'What is the name of your project?'
    }
])
.then(answers => console.log(answers));









// //make node responsive and add the initial array for the data
// const pageReadme = generatePage(name, github);


// fs.writeFile('README.md', pageReadme, err =>{
//     if (err) throw new Error(err);
//     console.log("README was created!");
// });