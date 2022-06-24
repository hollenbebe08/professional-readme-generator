//create the function to generate the README file
const generatePage = readmeData => {
    // let descTitle;
    let descText;
    let installText;
    let usageText;
    let contributionText;

    if(!readmeData.confirmDesc){
        descText = ''
    } else {
        descText = `${readmeData.description}`;
    };

    if(!readmeData.confirmInstall){
        installText = ''
    } else {
        installText = `${readmeData.installation}`;
    };

    if(readmeData.confirmUsage) {
        usageText = ''
    } else {
        usageText = `${readmeData.usage}`
    }

    if(!readmeData.confirmContribution){
        contributionText = ''
    } else {
        contributionText = `${readmeData.contribution}`
    }

return`
# ${readmeData.title}

## Description
${descText}

## Installation Instructions
${installText}

## Usage Instructions
${usageText}

## Contribution Guidelines
${contributionText}

`;
};

module.exports = generatePage;
