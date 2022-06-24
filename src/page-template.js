//create the function to generate the README file
const generatePage = readmeData => {
    let descText;
    let installText;
    let uInstructionsText;
    let contributionText;
    let licenseText;
    let tText;
    let questionText;

    if(!readmeData.confirmDesc){
        descText = ''
    } else {
        descText = `## Description \n${readmeData.description}`;
    };

    if(!readmeData.confirmInstall){
        installText = ''
    } else {
        installText = `## Installation Instructions \n${readmeData.installation}`;
    };

    if(!readmeData.confirmUInformation) {
        uInstructionsText = ''
    } else {
        uInstructionsText = `## Usage Instructions \n${readmeData.uInstructions}`;
    }

    if(!readmeData.confirmContribution){
        contributionText = ''
    } else {
        contributionText = `## Contribution Instructions \n${readmeData.contribution}`;
    }

    if(!readmeData.confirmLicense) {
        licenseText = ''
    } else if (readmeData.license === 'MIT'){
        licenseText = `## License \n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (readmeData.license === 'Apache 2.0') {
        licenseText = `## License \n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (readmeData.license === 'ISC'){
        licenseText = `## License \n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    }

    if(!readmeData.confirmTInstructions){
        tText = ''
    } else {
        tText = `## Test Instructions \n${readmeData.tInstructions}`
    }

    if(!readmeData.confirmQuestions) {
        questionText = ''
    } else {
        questionText = `## Contact Information \n${readmeData.questionsEmail}\n${readmeData.questionsInstructions}\n${readmeData.questionsGithub}`
    }

//this returns what will be printed from the template onto the README.md file
return`
# ${readmeData.title}

${descText}

${installText}

${uInstructionsText}

${contributionText}

${licenseText}

${tText}

${questionText}

`;
};

//allows the generatePage template to be exported into the index.js file
module.exports = generatePage;
