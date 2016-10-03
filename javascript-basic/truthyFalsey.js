//solution
/*
  Line 7: 'Hello'
  Line 11:
  Line 15: 'World'
  Line 19: '!'
*/

//discussion
/*
  In JavaScript there are sixs value considered as falsey:
  - false
  - null
  - 0
  - undefined
  - NaN
  - '' (empty string)

  so the truthy and falsey for the variables are:
  var myBoolean = true;    =>true
  var myString = 'hello';  =>true
  var myArray = [];        =>true
  var myOtherString = '';  =>false

  using '!' on any variables will give the opposite boolean value of the variable, when using two
  '!!' will give the original boolean value of the variable.

*/