//solution

function areArrayEqual(array1, array2) {
  if(array1.length !== array2.length) {
    return false;
  }

  var idx;

  for(var i = 0; i < array1.length; i++) {
    idx = array2.indexOf(array1[i]);
    if(idx >= 0) {
      //delete found value from array2
      array2.splice(idx, 1);
    } else {
      return false;
    }
  }

  return true;
}


console.log(areArrayEqual([1, 2, 3], [2, 3, 1]));