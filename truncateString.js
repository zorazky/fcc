function truncateString(str, num) {
  // Clear out that junk in your trunk

  var strSliced = "";


  //if number is less than 3 we don't count the ... to the position to cut
  if (num < 3){

    strSliced = str.slice(0, num) + "...";
    console.log(strSliced);
    return strSliced;

    //if number is less than the long of the string we count the ... to the position
  } else if (str.length > num  ) {

    strSliced = str.slice(0, num - 3) + "...";
    console.log(strSliced);
    return strSliced;

  
  } else {

    strSliced = str.slice(0, num);
    console.log(strSliced);
    return strSliced;

  }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
