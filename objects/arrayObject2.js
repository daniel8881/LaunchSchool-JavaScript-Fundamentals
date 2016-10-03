//solution
/*
  10
*/

//discussion
/*
  A non-positive integer is not considered as part of an array length. As such the 
  length is only 2 when the sum of the elements were divided by it.
*/

//Further Exploration
var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));

