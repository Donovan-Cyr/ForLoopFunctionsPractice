// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const clients=[];
  for (var i = 1; i <= array.length; i++) {
    var result = array.find(item => item.id === i);
    var nameCheck= result.name.toLowerCase();
    if (nameCheck.includes(letter) === true) {
      clients.push(result.name);
    }
  }
  return clients;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
