//solution

function concat() {
  var newArray = [];

  for(var i = 0; i < arguments[0].length; i++) {
    newArray[i] = arguments[0][i];
  }

  for(var j = 1; j < arguments.length; j++) {
    if(Array.isArray(arguments[j])) {
      for(var k = 0; k < arguments[j].length; k++) {
        newArray[newArray.length] = arguments[j][k];
      }
    } else {
      newArray[newArray.length] = arguments[j];
    }
  }

  return newArray;
}

console.log(concat([1,2,3], 4, [5,6,7]));