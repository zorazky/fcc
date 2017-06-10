function findLongestWord(str) {

  var longerstr = 1;

  //divide the string into words and create an array
  var astr = str.split(" ");

  // check on each item of the array
  for(var i = 0;i <= astr.length - 1; i++){


    //if new item is bigger than current, replace current 
    if(longerstr < astr[i].length) {
      longerstr = astr[i].length;
    }

  }

  console.log(longerstr);
  return longerstr;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
