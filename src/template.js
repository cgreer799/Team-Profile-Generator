const Engineer = require("../lib/Engineer");

let managerCard = "";
let internCard = "";
let engineerCard = "";


function generateManagerCard(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === 'Manager') {
        newManagerCard = `<div class="card" id="manager-card">
            <div class="card-header">
                <p>${data[i].name}</p>
                <p>Manager</p>
            </div>
            <div class="card-body">
                <p class="card-text" id="id">ID: ${data[i].id}</p>
                <p class="card-text" id="email">Email: <a href="mailto: ${data[i].email}"> ${data[i].email}</a></p>
                <p class="card-text" id="office-number">Office Number: ${data[i].officeNumber}</p>
            </div>
        </div>
        `
        managerCard = managerCard + newManagerCard
        }
    }
}

function generateEngineerCard(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === 'Engineer') {
        newEngineerCard = `<div class="card" id="engineer-card">
            <div class="card-header">
                <p>${data[i].name}</p>
                <p>Engineer</p>
            </div>
            <div class="card-body">
                <p class="card-text" id="id">ID: ${data[i].id}</p>
                <p class="card-text" id="email">Email: <a href="mailto: ${data[i].email}"> ${data[i].email}</a></p>
                <p class="card-text" id="github">GitHub:<a href='https://github.com/${data[i].github}'  class="website-url"> ${data[i].github}</a></p>
            </div>
        </div>
        `
        engineerCard = engineerCard + newEngineerCard
        }
    }
}

function generateInternCard(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === 'Intern') {
        newInternCard = `<div class="card" id="intern-card">
            <div class="card-header">
                <p>${data[i].name}</p>
                <p>Intern</p>
            </div>
            <div class="card-body">
                <p class="card-text" id="id">ID: ${data[i].id}</p>
                <p class="card-text" id="email">Email: <a href="mailto: ${data[i].email}"> ${data[i].email}</a></p>
                <p class="card-text" id="school">School: ${data[i].school}</p>
            </div>
        </div>
        `
        internCard = internCard + newInternCard;
        }
    }
}

function generateTemplate(data) {

    generateManagerCard(data);//functions to generate the html for the manager, engineer, and intern
    generateEngineerCard(data);
    generateInternCard(data);

    const start = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="./style.css" />
          <title>Team Profile</title>
        </head>
        <body>
          <div class="container-fluid d-flex justify-content-center header mb-2">
            <div class="row mt-3 mb-2">
              <h1>My Team</h1>
            </div>
          </div>
          <main class="row d-flex justify-content-center">
          `;

    const end = `</main>
          <script
            src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
          ></script>
        </body>
      </html>`;

    const template = start + managerCard + engineerCard + internCard + end;

    return template;
  }
  
  module.exports = { generateTemplate };
