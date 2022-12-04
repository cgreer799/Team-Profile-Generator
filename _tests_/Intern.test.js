const Intern = require("../lib/Intern")

//First 3 parameters were tested in Employee.test.js
describe("Intern Class initialization", () => {
    test("Fourth parameter relates to school", () => {
        const testElement = new Intern("Intern Mike", 789, "Imike@gmail.com", "UTA");
        expect(testElement.school).toBe("UTA");
    });
});

//First 3 get methods were tested in Employee.test.js
describe("Intern Class methods", () => {
    const testElement = new Intern("Intern Mike", 789, "Imike@gmail.com", "UTA");
    test("getSchool() returns the school", () => {
        expect(testElement.getSchool()).toBe("UTA");
    });
    test("getRole() returns the role", () => {
        expect(testElement.getRole()).toBe("Intern");
    });
});