function reverseString(str) {


  //first convert the string to array without spaces
  var myArray = str.split("");
  //after reverse the order in the array
  myArray.reverse();
  // convert to string using join you need the "" to avoid commas
  str = myArray.join("");

  return str;
}

reverseString("hello");
