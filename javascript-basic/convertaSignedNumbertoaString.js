//solution

function integerToString(number) {
    var digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var stringOfNumber = '';
    var sign = '';

    if(number > 0) {
      sign = '+';
    }else if(number < 0) {
      sign = '-';
    }

    number = Math.abs(number);

    do {
        stringOfNumber = digit[number % 10] + stringOfNumber;
        number = Math.floor(number / 10);
    } while (number > 0)


    return sign + stringOfNumber;
}


console.log(integerToString(-100));
