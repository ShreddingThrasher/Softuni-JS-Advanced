
function autoEngineeringCompany(input){

    let result = {};

    for (const line of input) {
        let [brand, model, qnty] = line.split(' | ');

        if(!result[brand]){
            result[brand] = {};
        }

        if(!result[brand][model]){
            result[brand][model] = 0
        }

        result[brand][model] += Number(qnty);
    }

    for (const key in result) {
        console.log(key);

        for (const model of Object.keys(result[key])) {
            console.log(`###${model} -> ${result[key][model]}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])