const Engineer = require("../lib/Engineer")

//First 3 parameters were tested in Employee.test.js
describe("Engineer Class initialization", () => {
    test("Fourth parameter relates to github", () => {
        const testElement = new Engineer("Engineer Paul", 456, "epaul@gmail.com", "epaul");
        expect(testElement.github).toBe("epaul");
    });
});

//First 3 get methods were tested in Employee.test.js
describe("Engineer Class methods", () => {
    const testElement = new Engineer("Engineer Paul", 456, "epaul@gmail.com", "epaul");
    test("getGithub() returns github", () => {
        expect(testElement.getGithub()).toBe("epaul");
    });
    test("getRole() returns the role", () => {
        expect(testElement.getRole()).toBe("Engineer");
    });
});
