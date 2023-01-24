// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  const clients=[];
  var compare = array[0];
  for (var i = 1; i <= array.length; i++) {
    var result = array.find(item => item.id === i);
    if (result.balance > 0) {
      if (result.balance < compare.balance) {
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
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
