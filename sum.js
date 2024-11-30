function sum(num1,num2){
    const sum = num1, num2;
    console.log('summation of 2 numbers:',sum);
}
sum(6,,5);
sum (4,8);
sum (10,10);

////-------/////
function sum(num1, calculate, num2) {
    let result;
    if (calculate === '+') {
        result = num1 + num2;
    } else {
        console.log('Unsupported operation');
        return;
    }
    console.log('Summation of 2 numbers:', result);
}

sum(6, '+', 5);