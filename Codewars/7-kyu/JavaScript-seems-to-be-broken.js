// There is some horribly rotten script that is not required in your project anymore, and it is affecting the way your code is supposed to work.

// For some reason you don't have an access to that rotten piece of code but you want to get your code working as expected in any possible way.

// Go and get it working

function semicolonSeparationToCommaSeparation(input) {
  return input.split(";").toLocaleString(",");
}
