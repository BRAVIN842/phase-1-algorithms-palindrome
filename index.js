function isPalindrome(word) {
  // Write your algorithm here
   // Convert the word to lowercase to make it case-insensitive
   const lowercasedWord = word.toLowerCase();

   // Reverse the word
   const reversedWord = lowercasedWord.split('').reverse().join('');
 
   // Compare the reversed word with the original word
   return lowercasedWord === reversedWord;
}

/* 
  Add your pseudocode here
  Convert the word to lowercase to make it case-insensitive
  Reverse the word
  Compare the reversed word with the original word
*/

/*
  Add written explanation of your solution here
   Convert the word to lowercase to make it case-insensitive
  Reverse the word
  Compare the reversed word with the original word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("lol"));

  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
