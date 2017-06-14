function bouncer(arr) {
  var index;

 for(var i=0; i < arr.length; i++) {

   if (arr[i] === null) {
     index = i;
     arr.splice(index, 1);
     i--;
   } else if (arr[i] === undefined) {
     index = i;
     arr.splice(index, 1);
     i--;
   } else if (arr[i] === false) {
     index = i;
     arr.splice(index, 1);
     i--;
   } else if ( typeof arr[i] != "string" && isNaN(arr[i])) {
     index = i;
     arr.splice(index, 1);
     i--;
   } else if (arr[i] === 0) {
     index = i;
     arr.splice(index, 1);
     i--;
   } else if(arr[i].length <= 0) {
      index = i;
      arr.splice(index, 1);
      i--;
   }

 }


  console.log(arr);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
