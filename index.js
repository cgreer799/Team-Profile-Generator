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
            message: "Provide the manager's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Provide the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Provide the manager's email address.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Provide the manager's office number.",
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

    inquirer.prompt(managerQuestions).then((inquirerResponses) => {
        const manager = new Manager (inquirerResponses.name, inquirerResponses.id, inquirerResponses.email, inquirerResponses.officeNumber);
        employeesArray.push(manager);
        switch(inquirerResponses.addEmployees){
            case 'Intern':
                //function to create intern
                createIntern();
            break;
            case 'Engineer':
                //function to create Engineer
                createEngineer();
            break;
            case 'Generate Team':
            writeHTML();
        };
    })
}

function createEngineer () {
    const engineerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "Provide the engineer's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Provide the engineer's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Provide the engineer's email address.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Provide the engineer's GitHub username.",
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
                //function to create intern
                createIntern();
            break;
            case 'Engineer':
                //function to create Engineer
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
    fs.writeFileSync('./dist/index.html', template.generateTemplate(employeesArray))
    console.log('Generating Team Profile HTML...');
    
}

createManager();
