
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const clients=[];
  for (var i = 1; i <= array.length; i++) {
    var result = array.find(item => item.id === i);
    var depositsSum = 0;
    var withdrawalsSum = 0;

    if (result.hasOwnProperty('deposits') === true) {
        depositsSum = result.deposits.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      });
    }
    if (result.hasOwnProperty('withdrawals') === true) {
        withdrawalsSum = result.withdrawals.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      });
    }

    if (depositsSum - withdrawalsSum !== result.balance) {
      clients.push(result);
    }
  }
  return clients;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
