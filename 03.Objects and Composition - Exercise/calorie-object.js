function calories(input){
    const calorieObject = {};

    for(let i = 0; i < input.length; i+=2){
        calorieObject[input[i]] = Number(input[i+1]);
    }

    console.log(calorieObject);
}
