//solution

function shift(arr) {
  if(arr.length === 0){
    return undefined;
  }

  var newArray = [];

  for(var i = 1; i < arr.length; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
}

console.log(shift([]));


function unshift(array) {
  var tempArray = [];
  
  //create new array
  for (var i = 1; i < arguments.length; i++) {
    tempArray[tempArray.length] = arguments[i];
  }
  

  //concat old array to new array
  for (var j = 0; j < array.length; i++) {
    tempArray[tempArray.length] = array[j];
  }

  return tempArray;
}