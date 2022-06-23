//create the function to generate the README file
const generatePage = readmeData => {
    let descTitle;
    let descText;

    if(!readmeData.confirmDesc){
        descText = ''
    } else {
        descText = `${readmeData.description}`;
    }

return`
# ${readmeData.title}
## ${descText}
`;
};

module.exports = generatePage;

// templateData => {
//     const {title, description, ...contents} = templateData;
//     return `
//     # ${templateData.title}
//     `;
// };