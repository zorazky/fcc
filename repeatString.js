function repeatStringNumTimes(str, num) {
  // repeat after me

  //take str value to add the needed times
  var addStr = str;
  //check number is not negative
  if (num >= 0) {
    for(var i = 1; i < num; i++){
      //add string to string
      str = str.concat(addStr);
    }
  } else {
    //if negative return empty string
      str="";
    }


  return str;
}

repeatStringNumTimes("abc", 3);
