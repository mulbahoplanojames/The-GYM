var shirtWidth = 26; // size L (large)
var shirtLength = 33.3; // size L (large)
var shirtSleeve = 9.64; // size L (large)

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
 */

if (
  shirtWidth >= 18 &&
  shirtWidth <= 19.99 &&
  shirtLength >= 28 &&
  shirtLength < 29.99 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve < 8.379
) {
  console.log("S");
} else if (
  shirtWidth >= 20 &&
  shirtWidth <= 21 &&
  shirtLength >= 29 &&
  shirtLength < 30 &&
  shirtSleeve >= 8.38 &&
  shirtSleeve < 8.63
) {
  console.log("M");
} else if (
  shirtWidth >= 22 &&
  shirtWidth <= 23 &&
  shirtLength >= 30 &&
  shirtLength < 31 &&
  shirtSleeve >= 8.63 &&
  shirtSleeve < 8.88
) {
  console.log("L");
} else if (
  shirtWidth >= 24 &&
  shirtWidth <= 25 &&
  shirtLength >= 31 &&
  shirtLength < 33 &&
  shirtSleeve >= 8.88 &&
  shirtSleeve < 9.63
) {
  console.log("XL");
} else if (
  shirtWidth >= 26 &&
  shirtWidth <= 27 &&
  shirtLength >= 33 &&
  shirtLength < 34 &&
  shirtSleeve >= 9.63 &&
  shirtSleeve < 10.13
) {
  console.log("2XL");
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log("3XL");
} else {
  console.log("NA");
}
