const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is your id number? (Required)',
            validate: idNumber => {
                if (idNumber) {
                    return true;
                } else {
                    console.log('Please enter your id number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!')
                    return false;
                }
            }
        },
    ]);
};

promptUser();











const profileDataArgs = process.argv.slice(2);
const [email, github] = profileDataArgs;

/*fs.writeFile('./index.html', generatePage(email, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});*/