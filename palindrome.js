function palindrome(str) {
  // Good luck!
  //the string reversed
  var rstr;

  str = str.toLowerCase();

  // just remove white spaces
  //str = str.replace(" ", "");

  // remove special characters, white spaces
  str = str.replace(/[^0-9a-z]/gi, '');

  // convert to array and invert the order
  var myArray = str.split("");
  myArray.reverse();
  rstr = myArray.join("");

  // check if inverted is the same that original
  if (rstr === str) {

    console.log("true");
    return true;

  } else {
    console.log("false");
    return false;
  }

}



palindrome("eye");
