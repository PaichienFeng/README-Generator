const inquirer=require('inquirer');
const fs=require('fs');

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
        name: 'project name',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT','APACHE 2.0','GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'command install',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What command should be run to run test?',
        name: 'command test',
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
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
  });