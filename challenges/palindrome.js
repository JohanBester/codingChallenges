function palindrome(str) {
  let re = /[\W_]/g;
  let word = str.toLowerCase().replace(re, '');
  let reverse = word.split('').reverse().join('');
  if (reverse === word) {
     console.log(`True! "${str}" is a palindrome.`);
  }
};

palindrome("A man, a plan, a canal. Panama!");