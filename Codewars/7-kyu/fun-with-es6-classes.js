class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea() {
    // 2(lw + lh + wh)
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }

  get volume() {
    // l × w × h
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}

const cuboid = new Cuboid(1, 2, 3);
console.log(cuboid.length);
console.log(cuboid.surfaceArea);
console.log(cuboid.volume);

const cube = new Cube(3);
console.log(cube.length);
console.log(cube.surfaceArea);
console.log(cube.volume);
