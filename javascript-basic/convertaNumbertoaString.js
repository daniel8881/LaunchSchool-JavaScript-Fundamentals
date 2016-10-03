//solution

function integerToString(number) {
    var digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var stringOfNumber = '';

    do {
        stringOfNumber = digit[number % 10] + stringOfNumber;
        number = Math.floor(number / 10);
    } while (number > 0)


    return stringOfNumber;
}


console.log(integerToString(5000));
