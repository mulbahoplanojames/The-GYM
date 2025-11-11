class Lamp {
  constructure(color, on = false) {
    this.color = color;
    this.on = on;
  }

  toggleSwitch() {
    this.on = !this.on;
  }

  state() {
    return this.on ? "The lamp is on." : "The lamp is off.";
  }
}

const lamp = new Lamp("Blue", true);

console.log(lamp.color);
console.log(lamp.on);
console.log(lamp.state());
