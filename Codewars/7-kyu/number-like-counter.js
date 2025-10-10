class Counter {
  constructor() {
    this.count = 0;
  }

  incr() {
    this.count += 1;
  }

  valueOf() {
    return this.count;
  }

  toString() {
    return String(this.count);
  }
}

const C = new Counter();
console.log(C.incr());
console.log(C == 0);
console.log(C + 1);
console.log(C > 0);
