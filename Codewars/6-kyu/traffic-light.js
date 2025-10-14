class SmartTrafficLight {
  constructor(st1, st2) {
    this.roads = [st1, st2];
  }

  turngreen() {
    // If both roads have the same number of cars or both are clear, return null
    if (this.roads[0][0] === this.roads[1][0]) {
      if (this.roads[0][0] === 0) return null;
      return null;
    }
    console.log(this.roads);

    // Find the road with the most cars
    let maxIdx = this.roads[0][0] > this.roads[1][0] ? 0 : 1;
    let name = this.roads[maxIdx][1];
    this.roads[maxIdx][0] = 0; // Clear cars from that road
    return name;
  }
}

// Example usage
t = new SmartTrafficLight([42, "27th ave"], [72, "3rd st"]);
console.log(t.turngreen());
