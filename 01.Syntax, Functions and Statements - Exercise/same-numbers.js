function sameNumbers(input){

    let sum = 0;
    let isOnlyNumbers = true;

    let asString = input.toString();
    let checker = asString[0];

    for (let i = 0; i < asString.length; i++) {
        if(asString[i] != checker){
            isOnlyNumbers = false;
        }
        
        sum += Number(asString[i]);
    }

    console.log(isOnlyNumbers);
    console.log(sum);
}