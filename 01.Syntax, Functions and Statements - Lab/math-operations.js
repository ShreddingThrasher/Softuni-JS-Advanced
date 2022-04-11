function MathOperations(num1, num2, str){

    let result = undefined;

    switch(str){
        case '+': 
            result = num1 + num2; 
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;

    }

    console.log(result);
}