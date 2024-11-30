function sum(num1, calculate, num2) {
    let result;
    if (calculate === '+') {
        result = num1 + num2;
    }
    else if( calculate === '-'){
        result = num1 - num2;
    }
    else if( calculate === '*'){
        result = num1 * num2;
    }
    else if( calculate === '%'){
        result = num1 % num2;
    }

    else {
        console.log('Unsupported operation');
        return;
    }
    console.log('result:', result);
}

sum(6, '+', 5);
sum(5, '-', 2);
sum(3, '*', 2);
sum(10, '%', 2);
