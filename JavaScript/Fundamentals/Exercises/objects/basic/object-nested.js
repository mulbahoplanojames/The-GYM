/*
Create an object student with a nested object grades that holds math, science, and english scores.
Access and print science grade.

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

for (let key in Student.grades) {
  console.log(Student.grades[key]);
}
