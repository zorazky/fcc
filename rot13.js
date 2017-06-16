function rot13(str) { // LBH QVQ VG!

  var convertChar;
  var nString = "";

  for (var i =0; i < str.length; i++) {
    convertChar = str.charAt(i);
    convertChar = convertChar.charCodeAt();

    if(convertChar < 65 || convertChar > 90){

      nString = nString.concat(str.charAt(i));

    } else if (convertChar <= 77){
      convertChar += 13;
      convertChar = String.fromCharCode(convertChar);
      nString = nString.concat(convertChar);

    } else if (convertChar > 77){
      convertChar -= 13;
      convertChar = String.fromCharCode(convertChar);
      nString = nString.concat(convertChar);

    }




  }


  console.log(nString);


  return nString;
}

// Change the inputs below to test
//"FREE CODE CAMP"
rot13("SERR PBQR PNZC");

rot13("SERR CVMMN!");

rot13("SERR YBIR?");
