function fruitCalculate(fruit, weight, pricePerKilo){

    let weightInKilo = Number(weight) / 1000;
    let price = weightInKilo * Number(pricePerKilo);

    console.log(`I need $${price.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);
}