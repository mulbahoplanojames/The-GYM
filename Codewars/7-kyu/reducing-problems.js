function calculateTotal(team1, team2) {
  if (team1.length === 0) {
    team1.push(0);
  }

  if (team2.length === 0) {
    team2.push(0);
  }

  var t1s = Math.floor(team1.reduce((t, c) => t + c) / 3);
  console.log("🚀 ~ demo.js ~ calculateTotal ~ t1s:", t1s);

  var t2s = Math.floor(team2.reduce((t, c) => t + c) / 3);
  console.log("🚀 ~ demo.js ~ calculateTotal ~ t2s:", t2s);

  if (t1s > t2s) {
    return true;
  } else {
    return false;
  }
}

console.log(calculateTotal([6, 45, 1], [1, 55, 0]));
