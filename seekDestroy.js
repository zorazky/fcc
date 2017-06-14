function destroyer(arr) {
  // convert arguments into array
  var args = Array.prototype.slice.call(arguments);
  console.log(args);

  //remove array and keep arguments
  args = args.splice(1,args.length);
  console.log(args);

  //we filter on each item of the array
  return arr.filter(function(element) {
    //if match our argumentsreturn -1 if is -1 we filter and remove from array
    return args.indexOf(element) === -1;

  });


}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
