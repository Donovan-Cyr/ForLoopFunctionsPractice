// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  const clients=[];
  for (var i = 1; i <= array.length; i++) {
    var result = array.find(item => item.id === i);
    if (result.hasOwnProperty('withdrawals') === true) {
      var sum = result.withdrawals.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      });
      clients.push(sum);
    } else {
      clients.push(0);
    }
  }
  return clients;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
