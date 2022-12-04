const Employee = require("../lib/Employee")

describe("Employee Class initialization", () => {
    test("is an object", () => {
        const testElement = new Employee();
        expect(typeof(testElement)).toBe("object");
    });
    test("First parameter relates to name", () => {
        const testElement = new Employee("Manager John");
        expect(testElement.name).toBe("Manager John");
    });
    test("Second parameter relates to id", () => {
        const testElement = new Employee("Manager John",123);
        expect(testElement.id).toBe(123);
    });
    test("Third parameter relates to name", () => {
        const testElement = new Employee("Manager John",123,"ManagerJ@gmail.com");
        expect(testElement.email).toBe("ManagerJ@gmail.com");
    });
});

describe("Employee class methods", () => {
    const testElement = new Employee("Manager John",123,"ManagerJ@gmail.com");
    test("getName() returns the name",() =>{
        expect(testElement.getName()).toBe("Manager John");
    });
    test("getId() returns the id",() =>{
        expect(testElement.getId()).toBe(123);
    });
    test("getEmail() returns the email",() =>{
        expect(testElement.getEmail()).toBe("ManagerJ@gmail.com");
    });
    test("getRole() returns the role",() =>{
        expect(testElement.getRole()).toBe("Employee");
    });
});
