const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const path = require('path');

const template = require('./src/template.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let employeesArray = [];

function start () {
    console.log("Starting Team Profile Generator...");
    console.log("Answer the prompts to build your team starting with the manager.");
    createManager();
}

function createManager () {
    const managerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name. (Name cannot be blank)",
            validate: (answer) => {
                if (answer !== "") {
                  return true;
                }
                return "The manager's name must not be blank.";
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID. (any number positive 1 to 3 digit number)",
            validate: (answer) => {
                const validAnswer = answer.match(/[0-9]||[1-9][0-9]||[1-9][0-9][0-9]/);
                if (validAnswer) {
                  return true;
                }
                return "The manager's id must be a 1 to 3 digit number.";
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email address. (Ex: employee@gmail.com)",
            validate: (answer) => {
                const validAnswer = answer.match(/^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/);
                if (validAnswer) {
                  return true;
                }
                return "Please enter a valid email for the manager.";
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number. (3 Capital letters followed by 3 numbers. Ex: AAA123)",
            validate: (answer) => {
                const validAnswer = answer.match(/^([A-Z]{3})([0-9]{3})$/);
                if (validAnswer) {
                  return true;
                }
                return "Please enter a valid office number for the manager.";
            }
        },
        {
            type: 'list',
            name: 'addEmployees',
            message: 'Select from the list to add another Employee to your team.',
            choices: [
                'Intern',
                'Engineer'
            ]
        }
    ];

    inquirer.prompt(managerQuestions).then((inquirerResponses) => {
        const manager = new Manager (inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.officeNumber);
        employeesArray.push(manager);
        switch(inquirerResponses.addEmployees){
            case 'Intern':
                createIntern();
                break;
            case 'Engineer':
                createEngineer();
                break;
        };
    })
}

function createEngineer () {
    const engineerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name.",
            validate: (answer) => {
                if (answer !== "") {
                  return true;
                }
                return "The engineer's name must not be blank.";
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's ID. (any number positive 1 to 3 digit number)",
            validate: (answer) => {
                const validAnswer = answer.match(/[0-9]||[1-9][0-9]||[1-9][0-9][0-9]/);
                if (validAnswer) {
                        return true;
                }
                return "The engineer's id must be a 1 to 3 digit number.";
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email address. (Ex: employee@gmail.com)",
            validate: (answer) => {
                const validAnswer = answer.match(/^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/);
                if (validAnswer) {
                        return true;
                }
                return "Please enter a valid email for the engineer.";
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's GitHub username.",
            validate: (answer) => {
                if (answer !== "") {
                        return true;
                }
                return "Please enter a valid github for the engineer.";
            }
        },
        {
            type: 'list',
            name: 'addEmployees',
            message: 'Select from the list to add another Employee. If you are done adding Employees, select Generate Team.',
            choices: [
                'Intern',
                'Engineer',
                'Generate Team'
            ]
        }
    ];

    inquirer.prompt(engineerQuestions).then((inquirerResponses) => {
        const engineer = new Engineer (inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.github);
        employeesArray.push(engineer);
        switch(inquirerResponses.addEmployees){
            case 'Intern':
                createIntern();
                break;
            case 'Engineer':
                createEngineer();
                break;
            case 'Generate Team':
                writeHTML();
                break;
        };
    })
}

function createIntern () {
    const internQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name.",
            validate: (answer) => {
                if (answer !== "") {
                  return true;
                }
                return "The intern's name must not be blank.";
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's ID. (any number positive 1 to 3 digit number)",
            validate: (answer) => {
                const validAnswer = answer.match(/[0-9]||[1-9][0-9]||[1-9][0-9][0-9]/);
                if (validAnswer) {
                  return true;
                }
                return "The intern's id must be a 1 to 3 digit number.";
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email address. (Ex: employee@gmail.com)",
            validate: (answer) => {
                const validAnswer = answer.match(/^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/);
                if (validAnswer) {
                        return true;
                }
                return "Please enter a valid email for the intern.";
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school.",
            validate: (answer) => {
                if (answer !== "") {
                        return true;
                }
                return "The intern's school must not be blank";
            }
        },
        {
            type: 'list',
            name: 'addEmployees',
            message: 'Select from the list to add another Employee. If you are done adding Employees, select Generate Team.',
            choices: [
                'Intern',
                'Engineer',
                'Generate Team'
            ]
        }
    ];

    inquirer.prompt(internQuestions).then((inquirerResponses) => {
        const intern = new Intern (inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.school);
        employeesArray.push(intern);
        switch(inquirerResponses.addEmployees){
            case 'Intern':
               createIntern();
                break;
            case 'Engineer':
                createEngineer();
                break;
            case 'Generate Team':
                writeHTML();
                break;
        };
    })
}

function writeHTML() {
    console.log(employeesArray);
    console.log('Generating Team Profile HTML...');
    fs.writeFileSync('./dist/index.html', template.generateTemplate(employeesArray))
    console.log('Team Profile HTML created.');
    console.log("Thank you for using the Team Profile Generator.");
}

start();
