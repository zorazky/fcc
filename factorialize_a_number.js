function factorialize(num) {

  //start from 1 no 0
  var myCounter = 1;

  // you add and multyple until you reach your number
  for(var i = 1; i <= num; i++){

    myCounter = myCounter * i;

  }

  console.log(myCounter);
  return myCounter;
}

factorialize(5);
