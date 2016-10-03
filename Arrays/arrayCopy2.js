//solution

function arrayCopy(arr) {
  return arr.slice(0);
}

  
function arrayCopy2(arr) {
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
}