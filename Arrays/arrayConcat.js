//solution      

function concat(array, secondArg) {
  var newArray = [];

  for(var i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }

  if(Array.isArray(secondArg)) {
    for(var j = 0; j < secondArg.length; j++) {
      newArray[newArray.length] = secondArg[j];
    }
  } else {
    newArray[newArray.length] = secondArg;
  }

  return newArray;
}


console.log(concat([1,2,3], [4,5,6]));
console.log(concat([1,2,3], 'abc'));