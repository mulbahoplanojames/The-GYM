const numbers = [1, 2, 3, 4];
const numbersIterator = numbers[Symbol.iterator]();
// console.log(numbersIterator);

const myIterator = {
  current: 0,
  last: 5,
  next() {
    if (this.current < this.last) {
      return { value: this.current++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  },
};

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

const myIterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        return count < 3 ? { value: count++, done: false } : { done: true };
      },
    };
  },
};

for (const value of myIterable) {
  console.log(value); // 0, 1, 2
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
const numbersIterator1 = numbers1[Symbol.iterator]();

console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
