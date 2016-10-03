//solution
/*
  The problem is string.split(' ')[-2]
  All Arrays are start from 0, which means it's 0-base index system.
  By passing in -1 (i.e myArray[-1]) we are actually telling JavaScript to return 
  the value of the property with -1 as the key.
*/

//discussion


function penultimate(string) {
  var arr = string.split(' ')
  return arr[arr.length - 2];
}

console.log(penultimate('last word'));



