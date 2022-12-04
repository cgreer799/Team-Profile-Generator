const Manager = require("../lib/Manager")

//First 3 parameters were tested in Employee.test.js
describe("Intern Class initialization", () => {
    test("Fourth parameter relates to officeNumber", () => {
        const testElement = new Manager("Manager John",123,"ManagerJ@gmail.com",1234);
        expect(testElement.officeNumber).toBe(1234);
    });
});

//First 3 get methods were tested in Employee.test.js
describe("Intern Class methods", () => {
    const testElement = new Manager("Manager John",123,"ManagerJ@gmail.com",1234);
    test("getOfficeNumber() returns the officeNumber", () => {
        expect(testElement.getOfficeNumber()).toBe(1234);
    });
    test("getRole() returns the role", () => {
        expect(testElement.getRole()).toBe("Manager");
    });
});