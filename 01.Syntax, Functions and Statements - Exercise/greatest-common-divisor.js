function greatestCommonDivisor(a, b){

    let num1 = Number(a);
    let num2 = Number(b);

    let gcd = 0;

    for(let i = 9; i > 0; i--){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
            break;
        }
    }

    console.log(gcd);
}