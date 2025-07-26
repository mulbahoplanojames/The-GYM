/*
averageGrades(students) where each student={name,grade}. Return class avg.
*/

function averageGrades(students) {
  students.map((student) => {
    let sum = 0;
    // sum += student.grade;
    // console.log("🚀 ~ averageGrades.js ~ averageGrades ~ students:", sum);
    // console.log("🚀 ~ averageGrades.js ~ students.map ~ student:", student);

    for (key in student) {
      if (key === "grade") {
        sum += student[key];
        // console.log(student[key]);
      }
    }
    console.log(sum);
  });
}

averageGrades([
  { name: "A", grade: 10 },
  { name: "B", grade: 8 },
]);
