const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

const promptUser = () => {
    return inquirer
    .prompt([
        {  
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your projects title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description for your project. (Required)',
            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                } else {
                    console.log('Please add a description for your project.');
                    return false;
                }
            }
        },
    ]);
};

const promptSections =  readmeData => {
    return inquirer
    .prompt ([
        {
            type: 'checkbox',
            name: 'contents',
            message: 'Choose which items your README will include in your Table of Contents. (Check all that apply)',
            choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add installation instructions for future users.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Add information about your project allowing future readers to know how your project is intended to be used.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license (if any) does your project have?',
            choices: ['MIT', 'Apache 2.0', 'ISC']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Detail any guidelines to follow if you would like other developers to contribute to your project.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'detail how others can test your application.'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Type your GitHub username to include a link to your profile and your email to have other users reach out to you with questions.'
        }
    ]);
};

promptUser()
.then(promptSections)
.then(readmeData => {
    console.log(readmeData);
});



// //make node responsive and add the initial array for the data
// const pageReadme = generatePage(name, github);


// fs.writeFile('README.md', pageReadme, err =>{
//     if (err) throw new Error(err);
//     console.log("README was created!");
// });