const Employee = require('./Employee');

//constructor extending Employee class and adding officeNumber to Manager Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber() {return this.officeNumber;}

    getRole() {return 'Manager';}

}

module.exports = Manager;