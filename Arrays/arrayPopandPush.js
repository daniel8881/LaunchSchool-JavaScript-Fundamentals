//solution

function pop(arr) {
  if(arr === undefined || arr.length === 0) {
    return undefined;
  }

  var temp = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return temp;
}

// var a = [1,2,3];
// console.log(pop(a));
// console.log(a);
// console.log(pop([]));
// console.log(pop());


function push() {
  var arr = arguments[0];

  for(var i = 1; i < arguments.length; i++) {
    arr[arr.length] = arguments[i];
  }

  return arr.length;
}

var b = [3,4,5];
console.log(push(b, 1));
console.log(b);
console.log(push([1,2], ['a', 'b']));
console.log(push([],1));
console.log(push([]));