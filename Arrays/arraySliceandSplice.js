//solution

//slice
//input: array, indice1(optional), indice2(optional)

//indice1
//if indice1 if negative indice1 = array.length + indice1
//if Math.abs(indice) > array.length, indice = 0
//if indice1 is undefine, then indice = 0

//indice2
//exclusive
//negative is the same
//if indice2 === undefined, then slice to the end


function slice(array) {
  var beginIndex = arguments[1];
  var endIndex = arguments[2];
  var newArray = [];

  if(beginIndex === undefined) {
    beginIndex = 0;
  } else if(Math.abs(beginIndex) > array.length) {
    beginIndex = 0;
  } else if(beginIndex < 0) {
    beginIndex = array.length + beginIndex;
  } 

  if(endIndex === undefined) {
    endIndex = array.length;
  } else if(Math.abs(endIndex) > array.length) {
    endIndex = array.length;
  } else if(endIndex < 0) {
    endIndex = array.length + endIndex;
  }

  for(var i = beginIndex; i < endIndex; i++) {
    newArray[newArray.length] = array[i];
  }

  return newArray;
}

console.log(slice([1,2,3], 1, 2));


//splice
//input: array, start, deleteCount, items

//start
//if start > array.len, start = array.len
//if start < 0, start = array.len + start

//deleteCount
//if deleteCount > left element,  then remove all the rest

function splice(array, start, deleteCount) {
  var newArray = [];
  if (start < 0) {
    start = array.length + start;
  }

  if (!deleteCount) {
    deleteCount = array.length - start;
  }

  var tempArray = slice(array, 0, start);
  for (var i = 0, length = tempArray.length; i < length; i++) {
    newArray[newArray.length] = tempArray[i];
  }

  for (var i = 3, length = arguments.length; i < length; i++) {
    newArray[newArray.length] = arguments[i];
  }

  var tempArray = slice(array, start + deleteCount, array.length);
  for (var i = 0, length = tempArray.length; i < length; i++) {
    newArray[newArray.length] = tempArray[i];
  }

  return newArray;
}
