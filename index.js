const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const path = require('path');

const template = require('./src/template.js');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let employeesArray = [];

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
                const validAnswer = answer.match(/[0-9][0-9][0-9]/);
                if (validAnswer) {
                  return true;
                }
                return "The manager's id must be a 1 to 3 digit number.";
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email address.",
            validate: (answer) => {
                const validAnswer = answer.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
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
            message: "Provide the engineer's ID.",
            validate: (answer) => {
                const validAnswer = answer.match(/[0-9][0-9][0-9]/);
                if (validAnswer) {
                    if (employeesArray.includes(answer)) {
                        return 'This ID already exists in your team.';
                    } else {
                        return true;
                    }
                }
                return "The engineer's id must be a 1 to 3 digit number.";
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Provide the engineer's email address.",
            validate: (answer) => {
                const validAnswer = answer.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
                if (validAnswer) {
                    if (employeesArray.includes(answer)) {
                        return 'This email already exists in your team.';
                    } else {
                        return true;
                    }
                }
                return "Please enter a valid email for the engineer.";
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Provide the engineer's GitHub username.",
            validate: (answer) => {
                const validAnswer = answer.match(/^([a-zA-Z0-9]*)/);
                if (validAnswer) {
                    if (employeesArray.includes(answer)) {
                        return 'This GitHub username already exists in your team.';
                    } else {
                        return true;
                    }
                }
                return "Please enter a valid email for the manager.";
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
        };
    })
}

function createIntern () {
    const internQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "Provide the intern's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Provide the intern's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Provide the intern's email address.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Provide the intern's school.",
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
                // function to create intern
               createIntern();
            break;
            case 'Engineer':
                // function to create Engineer
                createEngineer();
            break;
            case 'Generate Team':
            writeHTML();
        };
    })
}

function writeHTML() {
    console.log(employeesArray);
    console.log('Generating Team Profile HTML...');
    fs.writeFileSync('./dist/index.html', template.generateTemplate(employeesArray))
    console.log('Team Profile HTML created.');
    
}

createManager();
