/*
filterOdds(obj) – given an object of key→number, keep only odds.
*/

function filterOdds(obj) {
  console.log("🚀 ~ filterOdds.js ~ filterOdds ~ obj:", obj);

  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      const value = obj[key];
      console.log(`${key}:${value}`);
    }
  }
}

filterOdds({ a: 2, b: 3, c: 7 });
