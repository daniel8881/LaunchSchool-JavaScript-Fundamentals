//solution
/*
  ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
*/

//discussion
/*
  In the first for-loop, go through all the elements of array1 and push it into array2
  so they don't have same reference, that's why the mutation of array1 didn't affect array2.
*/

//Further Exploration
var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = array1;

// for (var i = 0; i < array1.length; i++) {
//   array2.push(array1[i]);
// }

for (var i = 0; i < array1.length; i++) {
  if (array1[i].startsWith('C')) { array1[i] = array1[i].toUpperCase(); }
}

console.log(array2);