const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const promptUser = readmeData => {
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
            type: 'confirm',
            name: 'confirmDesc',
            message: 'Would you like your README to include a project description?',
            default: false
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description for your project.',
            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                }
                return false;
            } ,
            when: function(confirm) {
                return confirm.confirmDesc;
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like your README to include installation instructions for future users?',
            default: false
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add installation instructions.',
            validate: installInput => {
                if(installInput){
                    return true;
                } return false;
            },
            when: function(confirm) {
                return confirm.confirmInstall;
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to add usage information about your project allowing future readers to know how your project is intended to be used?',
            default: false
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Add usage information.',
            validate: usageInput => {
                if (usageInput){
                    return true;
                } return false;
            },
            when: function(confirm) {
                return confirm.confirmUsage;
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to include contribution guidelines for your project?',
            default: false
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Add contribution guidelines',
            validate: contributionInput => {
                if (contributionInput){
                    return true;
                } return false;
            },
            when: function(confirm){
                return confirm.confirmContribution;
            }
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmLicense',
        //     message: 'Does your project have a license?',
        //     default: false
        // },
        // {
        //     type: 'checkbox',
        //     name: 'license',
        //     message: 'Choose which license your project has?',
        //     choices: ['MIT', 'Apache 2.0', 'ISC']
        // },
        // {
        //     type: 'input',
        //     name: 'test',
        //     message: 'detail how others can test your application.'
        // },
        // {
        //     type: 'input',
        //     name: 'questions',
        //     message: 'Type your GitHub username to include a link to your profile and your email to have other users reach out to you with questions.'
        // }
                // {
        //     type: 'checkbox',
        //     name: 'contents',
        //     message: 'Choose which items your README will include in your Table of Contents. (Check all that apply)',
        //     choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        // },
    ]);
};

promptUser()
.then(readmeData => {
    const pageReadme = generatePage(readmeData);


fs.writeFile('README.md', pageReadme, err =>{
    if (err) throw new Error(err);
    console.log("README was created!");
});
});
