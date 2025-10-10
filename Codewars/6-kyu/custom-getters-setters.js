class Archiver {
  constructor() {
    this._temperature = null;
    this._archive = [];
  }

  get temperature() {
    return this._temperature;
  }

  set temperature(value) {
    this._temperature = value;
    this._archive.push({ date: new Date(), val: value });
  }

  getArchive() {
    return this._archive;
  }
}

const archive = new Archiver();
archive.temperature = 33;
archive.temperature = 28;
archive.temperature = 21;
console.log(archive.getArchive());
console.log(archive.temperature);
