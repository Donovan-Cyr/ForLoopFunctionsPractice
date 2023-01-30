
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const clients=[];
  for (var i = 0; i < array.length; i++) {
    var result = array[i];
    var depositsSum = 0;
    var withdrawalsSum = 0;

    if (result.hasOwnProperty('deposits') === true) {
      var deposits = array[i].deposits;
      for (var x = 0; x < deposits.length; x++) {
        depositsSum = depositsSum + deposits[x];
      }
    }
    if (result.hasOwnProperty('withdrawals') === true) {
      var withdrawals = array[i].withdrawals;
      for (var x = 0; x < withdrawals.length; x++) {
        withdrawalsSum = withdrawalsSum + withdrawals[x];
      }
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
