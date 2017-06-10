function largestOfFour(arr) {


  var bigNumber = 1;
  var myArray = [];

  //double loop the check item on array inside array
  for (var i=0;i < arr.length;i++) {
    for (var j=0; j < arr[i].length;j++){

      //if new number is bigger that counter update counter
      if(bigNumber < arr[i][j]){
        bigNumber = arr[i][j];
      }
    

    }
    //create new array with bigger numbers
    myArray.push(bigNumber);
    //reset counter to review next array
    bigNumber = 0;
  }

  //console.log(myArray);


  return myArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
