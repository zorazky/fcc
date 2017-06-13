function mutation(arr) {

  var firstWord = arr[0].toLowerCase();

  var secondWord = arr[1].toLowerCase().split('');

  //console.log(secondWord);


  for (var i = 0;i<secondWord.length;i++) {

    if (firstWord.indexOf(secondWord[i]) === -1) {


      //console.log('false');

      return false;



    }



  }

 //console.log('true');
 return true;


}


mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["Mary", "Army"]);
