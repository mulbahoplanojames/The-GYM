/*
Destructure an object to extract specific properties into variables, including renaming during destructuring.
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

const {
  firstName,
  lastName,
  address: { country, state },
  rollNumber,
} = Student;

// console.log(
//   `Hi i am ${firstName} ${lastName}, i am from ${state} ${country} and my rollNumebr is ${rollNumber}`,
// );

{
}
