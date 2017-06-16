function getIndexToIns(arr, num) {
  // reorder the array from small to big
  arr.sort(function(a, b){return a-b;});
  console.log(arr);

  //check all items on array
  for(var i =0; i <= arr.length; i++){
    //check if item is bigger than our number
    if (arr[i] >= num){

      num = i;
      break;
    } else if (i === arr.length) {

      num = i;
    }
  }

  console.log(num);
  return num;


}

getIndexToIns([40, 60], 50);
