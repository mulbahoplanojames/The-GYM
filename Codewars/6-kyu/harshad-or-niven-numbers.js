/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = (function () {
  "use strict";

  /**
   * Helper function to calculate the sum of the digits of a number.
   * @param {Number} n The number
   * @returns {Number} The sum of its digits
   */
  function sumDigits(n) {
    // Convert the number to a string, split it into an array of characters,
    // convert each character back to a number, and sum them up.
    return String(n)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * A number 'n' is a Harshad number if 'n' is divisible by the sum of its digits.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function (number) {
      if (number <= 0) return false; // Harshad numbers are positive numbers

      const sum = sumDigits(number);

      // A number 'n' is divisible by 'd' if the remainder is 0 (n % d === 0)
      return number % sum === 0;
    },

    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function (number) {
      let current = number + 1;

      // Loop infinitely (or until the condition is met)
      while (true) {
        if (this.isValid(current)) {
          return current;
        }
        current++;
      }
    },

    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     * defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function (count, start) {
      const serie = [];

      // Default the start value
      let current = start === undefined || start === null ? 0 : start;

      // Start searching for the first Harshad number AFTER 'current'
      current = this.getNext(current);

      // Loop until the required count is reached
      while (serie.length < count) {
        serie.push(current);
        // Find the next Harshad number after the one we just added
        current = this.getNext(current);
      }

      return serie;
    },
  };
})();
