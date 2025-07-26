/*
Theater seats often display a row and seat number to help theatergoers find their seats.
If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to
print out all of the different seat combinations in the theater.

Example output for row-seat information: output each row and seat number on a separate line
*/

for (var r = 0; r <= 25; r++) {
  for (var s = 0; s <= 99; s++) {
    console.log(`${r}-${s}`);
  }
}
