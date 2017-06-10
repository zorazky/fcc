function titleCase(str) {

  //convert all to small caps
  str = str.toLowerCase();

  //create an array with the words
  var astr = str.split(" ");


  for (var i=0; i < astr.length; i++) {

    //take the first letter of each word in upper case and paste with rest of the word, didn't find a way to change directly
    astr[i] = astr[i].charAt(0).toUpperCase() + astr[i].slice(1);
  }

  //paste words to create string again
  str = astr.join(" ");
  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
