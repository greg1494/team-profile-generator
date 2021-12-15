const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const teamBuilder = require('./src/page-template');

let Team = [];

const writeFileAsync = util.promisify(fs.writeFile);

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter Team managers name:',
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter Managers employee id:',
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'Enter Email address:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office number:'
        },
    ]);
};

function optionList() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'Options',
            message: 'Add engineer, intern or finish building your team:',
            choices: ['Engineer', 'Intern', "Finish"],
        },
    ])
    .then(teamChoices => {
        switch (teamChoices.Options) {
            case 'Engineer':
                addEng();
                break;
            case 'Intern':
                addIntern();
                break;
                default:
                generateTeam();
        }
    });
}

function addEng() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: 'Enter engineers name:',
        },
        {
            type: 'input',
            name: 'engId',
            message: 'Enter engineers ID:',
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'Add engineers email address:',
        },
        {
            type: 'input',
            name: 'engGithub',
            message: 'Add engineers Github Username:',
        },
    ])
    .then(answers => {
        const engineer = new Engineer(
            answers.engName,
            answers.engId,
            answers.engEmail,
            answers.engGithub
        );
        Team.push(engineer);

        optionList();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Add interns name:',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Add interns ID:',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Add interns email:',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Add interns school:',
        },
    ])
    .then(answers => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool,
        );
        Team.push(intern);

        optionList();
    });
}

const init = () => {
    promptManager().then(answers => {
        const manager = new Manager(
            answers.managerName,
            answers.employeeId,
            answers.emailAddress,
            answers.officeNumber
        );
        Team.push(manager);

        optionList();
    });
};

teamBuilder(Team);

const generateTeam = () => {
    
    let team = teamBuilder(Team);

    fs.writeFileSync('./dist/team.html', team, 'utf-8')
};

init();

















