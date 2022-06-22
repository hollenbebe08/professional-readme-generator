//create the function to generate the README file
const generatePage = (name, github) => {
    return`
    # Project Title
    ## Description
    ## Table of Contents
    ## Installation
    ## Usage
    ## License
    ## Contributing
    ## Tests
    ## Questions
    ## Name: ${name}, 
    ## GitHub: ${github}
    `;
};

module.exports = generatePage;