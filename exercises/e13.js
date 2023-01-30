
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  const clients=[];
  for (var i = 0; i < array.length; i++) {
    var result = array[i]
    if (result.hasOwnProperty('deposits') === true) {
      var sum = 0;
      var deposits = array[i].deposits;
      for (var x = 0; x < deposits.length; x++) {
        sum = sum + deposits[x];
      }
      if ( sum < 2000) {
        clients.push(result);
      }
    } else {
      clients.push(result);
    }
  }
  return clients;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
