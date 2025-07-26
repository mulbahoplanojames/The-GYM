/*
Use Object.entries() to loop through an object and print key-value pairs.
Then reconstruct the object using Object.fromEntries().
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

const entriesObj = Object.entries(Student);

console.log(entriesObj);
