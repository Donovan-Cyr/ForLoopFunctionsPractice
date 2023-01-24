
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  const clients=[];
  var compare = array[0];
  for (var i = 1; i <= array.length; i++) {
    var result = array.find(item => item.id === i);
    if (result.balance > 0) {
      if (result.balance > compare.balance) {
        compare = result;
      }
    }
    if (i == array.length) {
      clients.push(compare);
    }
  }
  return clients;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
