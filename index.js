//make node responsive
const readmeDataArgs = process.argv.slice(2, process.argv.length);
console.log(readmeDataArgs);

const printReadmeData = readmeDataArr => {
    readmeDataArr.forEach(readmeItem => console.log(readmeItem));
};

printReadmeData(readmeDataArr);