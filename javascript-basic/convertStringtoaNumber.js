//solution 

function stringToInteger(stringOfNumber) {
  var digit = ['0','1','2','3','4','5','6','7','8','9'];
  var number = 0;
  for(var i = 0; i < stringOfNumber.length; i++) {
    number = 10 * number + digit.indexOf(stringOfNumber[i]);
  }

  return number;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));