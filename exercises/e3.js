
// EXERCISE 3
// Return the average value for the given array of numbers, f.i.
// getAverage([22, 45, 4, 65]) => 34

export function getAverage(array) {
  // Your code goes here...
  // var numberSum = array.reduce(function(accumulator, currentValue) {
  //   return accumulator + currentValue;
  // });

  // var numberAverage = numberSum /= array.length;
  // return numberAverage;

  var numberSum = 0;
  var numberAverage = 0;
  for (var i = 0; i < array.length; i++) {
    numberSum = numberSum  + array[i];
  }
  numberAverage = numberSum /= array.length;

  return numberAverage;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
