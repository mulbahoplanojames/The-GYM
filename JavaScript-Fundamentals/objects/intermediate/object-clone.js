/*
Create an object and then make a shallow copy using the spread operator.
Change a value in the copied object and show that the original is not affected.
*/

const Student = {
  firstName: "John",
  lastName: "Wolobah",
  address: {
    country: "Liberia",
    state: "Monrovia",
    zipCode: "0298",
  },
  rollNumber: "202211903",
  courses: ["Javascript", "java", "c++", "mysql"],
  grades: {
    math: 90,
    scinece: 85,
    english: 96,
  },
};

const newStudent = { ...Student };

newStudent.firstName = "Abdalla";
newStudent.lastName = "Aleer";
newStudent.rollNumber = "20221198";

console.log(Student);
console.log(newStudent);
