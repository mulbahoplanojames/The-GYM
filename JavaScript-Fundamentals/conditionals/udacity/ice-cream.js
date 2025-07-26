// var flavor = "strawberry";
var flavor = "vanilla";
var vessel = "cone";
// var toppings = "cookies";
var toppings = "sprinkles";

if (
  (flavor === "chocolate" || flavor === "vanilla") &&
  (vessel === "cone" || vessel === "bowl") &&
  (toppings === "sprinkles" || toppings === "peanuts")
) {
  console.log(
    `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}`,
  );
} else {
  console.log("Nothing");
}
