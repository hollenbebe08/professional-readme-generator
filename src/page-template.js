//create the function to generate the README file
const generatePage = (name, github) => {
    return`
    # Professional README Generator
    ## Name: ${name}, 
    ## GitHub: ${github}
    `;
};

module.exports = generatePage;