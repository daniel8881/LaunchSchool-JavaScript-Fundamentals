//solution 

function stringToInteger(stringOfNumber) {
  var digit = ['0','1','2','3','4','5','6','7','8','9'];
  var number = 0;
  for(var i = 0; i < stringOfNumber.length; i++) {
    number = 10 * number + digit.indexOf(stringOfNumber[i]);
  }

  return number;
}

function stringToSignedInteger(string) {
  var firstLetter = string.charAt(0);
  if(isNaN(firstLetter)) {
    string = string.slice(1);
  }
  var number = stringToInteger(string);

  if(firstLetter === '+') {
    return number;
  } else if (firstLetter === '-') {
    return number * -1;
  } else {
    return number;
  }
}


console.log(stringToSignedInteger('+100'));