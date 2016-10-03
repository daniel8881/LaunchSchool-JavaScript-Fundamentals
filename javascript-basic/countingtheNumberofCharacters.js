//solution 

function countChar() {
  var text = prompt('Please write word or multiple words');
  var number = text.length;

  console.log('There are ' + number + ' characters in \"' + text + '\".');
}


//solution with no space

function countCharNoSpace() {
  var text = prompt('Please write word or multiple words');
  var number = text.replace(' ', '').length;

  console.log('There are ' + number + ' characters in \"' + text + '\".');  
}

//solution for only alphabetic char

function countAlphabeticChar() {
  var text = prompt('Please write word or multiple words');
  var number = text.replace(/[^a-z]/gi, '').length;

  console.log('There are ' + number + ' characters in \"' + text + '\".');
}


