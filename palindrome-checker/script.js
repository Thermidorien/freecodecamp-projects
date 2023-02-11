function palindrome(str) {
  str = str.toLowerCase();
  var charArr = str.split('');
  var validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charArr.forEach(char => {
    if (validChars.indexOf(char) > -1) lettersArr.push(char);
  });

  return lettersArr.join('') === lettersArr.reverse().join('');
}


palindrome("eye");
