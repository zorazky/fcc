function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  //check length of target
  var mylength = target.length;
  //compare the length of target with length of string
  var myStart =  str.length - mylength;
  //cut that part
  var tstr = str.substr(myStart , mylength);
  console.log(tstr);
  //compare target with piece of string
  if (tstr === target) {
    return true;
  } else {
    return false;
  }
  //return str;
}

confirmEnding("Bastian", "n");
