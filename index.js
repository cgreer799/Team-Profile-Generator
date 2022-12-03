const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const path = require('path');


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
                //Future function to create intern
                //createIntern();
            break;
            case 'Engineer':
                //Future function to create Engineer
                //createEngineer();
            break;
            case 'Generate Team':
            writeHTML();
        };
    })
}

function writeHTML() {
    console.log(employeesArray);
    fs.writeFile('./dist/index.html')
}

createManager();
