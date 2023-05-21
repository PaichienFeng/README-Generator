const inquirer=require('inquirer');
const fs=require('fs');


const createReadme=(answers)=>{
    const {license, email, username, projectName, description, commandInstall, commandTest, usage, contributing}=answers;
    return `
# ${projectName}

![License](https://img.shields.io/badge/License-${license}-blue.svg)

## Description
${description}
    
## Table of Contents
    
* [Installation](#installation)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contributing](#contributing)

* [Tests](#tests)
    
* [Questions](#questions)
    
## Installation
    
To install necessary dependencies, run the following command:

${commandInstall}
    
## Usage 
${usage}
    
## License
This project is licensed under the ${license} license.
    
## Contributing
${contributing}
    
## Tests
To run tests, run the following command:

${commandTest}
    
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${username}](https://github.com/${username}).`
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT','Apache_2.0','GPLv3', 'BSD_3--Clause', 'None'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'commandInstall',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What command should be run to run test?',
        name: 'commandTest',
        default: 'npm test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
  ])
  .then((data) => {

    const readme= createReadme(data);
    fs.writeFileSync('./output/README.md', readme);
    
  });