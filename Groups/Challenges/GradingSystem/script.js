function analyzeCourses(courses) {
  courses.map((course) => {
    //note: get course title
    const courseTitle = course.title;
    console.log(`📚 ${courseTitle}`);

    let topStudent = {
      name: "",
      average: 0,
    };

    const name = "james";

    //note: map through student array to perform operation
    course.students.map((student) => {
      const { name, scores } = student;

      //note: get the total score of each students
      let totalScores = scores.reduce(
        (prevScores, currentScore) => prevScores + currentScore,
        0
      );

      //note: get the average of each student
      let averageScore = totalScores / scores.length;

      //   console.log(scores);
      //   console.log(averageScore.toFixed(2));

      if (averageScore >= 60) {
        console.log(`${name} - Avg: ${averageScore.toFixed(2)} ✅ Pass`);
      } else {
        console.log(`${name} - Avg: ${averageScore.toFixed(2)} ❌ Fail`);
      }

      // Track top student
      if (averageScore > topStudent.average) {
        topStudent = {
          name,
          average: Number(averageScore.toFixed(2)),
        };
      }
    });
    console.log(`🏆 Top Student: ${topStudent.name} (${topStudent.average})`);
    console.log("----------------------");
  });
}

const courses = [
  {
    title: "JavaScript 101",
    students: [
      { name: "Alice", scores: [80, 85, 90] },
      { name: "Bob", scores: [50, 45, 60] },
      { name: "Charlie", scores: [95, 100, 98] },
    ],
  },
  {
    title: "HTML & CSS",
    students: [
      { name: "David", scores: [60, 70, 75] },
      { name: "Eva", scores: [30, 40, 35] },
      { name: "Frank", scores: [88, 92, 85] },
    ],
  },
];

analyzeCourses(courses);

// note: first try solution
// function analyzeCourses(courses) {
//   // Get all students
//   const students = course.students;
//   // Get all student score
//   const studentScores = students.map((student) => {
//     return student.scores;
//   });
//   console.log("studentScores", studentScores);
//   // Get all student score
//   const studentNames = students.map((student) => {
//     return student.name;
//   });
//   // Sum student score
//   const totalStudentScores = studentScores.map((score) =>
//     score.reduce((prevScore, currentScore) => prevScore + currentScore, 0)
//   );
//   console.log("Total Scores", totalStudentScores);
//   // formulate the average
//   let studentAverage = totalStudentScores.map((totalStudentScore) => {
//     const average = totalStudentScore / studentScores.length;
//     return Number(average.toFixed(2));
//   });
//   //   failed or pass
//   console.log("📚 ", courseTitle);
//   const result = studentAverage.map((average) => {
//     console.log(average);
//     if (average >= 60) {
//       return `${studentNames} ${average}`;
//     } else {
//       return "failed";
//     }
//   });
//   console.log("average", studentAverage);
//   console.log("result", result);
// }
