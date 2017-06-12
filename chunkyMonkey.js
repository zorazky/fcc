function chunkArrayInGroups(arr, size) {
  // Break it up.

  var nArr = [];

  //add a counter where we start each slice
  var sSlice = 0;
  for (var i=0; i < arr.length; i += size){
    nArr.push(arr.slice(sSlice,size + sSlice));

    //update counter for next slice
    sSlice += size;
    //console.log(sSlice);
    //console.log("i " + i);
  }

  console.log(nArr);
  return nArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
