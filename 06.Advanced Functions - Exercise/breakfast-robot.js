function solution(){

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    function instructionReceiver(instruction){
        let instructions = instruction.split(' ');

        let orderType = instructions[0];
        let productType = instructions[1];
        let quantity = Number(instructions[2]);

        if(orderType === 'report'){
            return functionObject[orderType]();
        } else{
            return functionObject[orderType](productType, quantity);
        }
    }

    const functionObject = {

        restock: (productType, quantity) => {
            ingredients[productType] += quantity;

            return 'Success';
        },
        prepare: (recipe, quantity) => {

            for (const [key, value] of Object.entries(recipes[recipe])) {

                if(ingredients[key] < value * quantity){
                    return `Error: not enough ${key} in stock`;
                }
            }

            for (const [key, value] of Object.entries(recipes[recipe])) {

                ingredients[key] -= value * quantity;
            }

            return 'Success';
        },
        report: () => {
            let reportArr = [];

            for (const key in ingredients) {
                reportArr.push(`${key}=${ingredients[key]}`);
            }

            return reportArr.join(' ');
        }
    }
    
    return instructionReceiver;
}