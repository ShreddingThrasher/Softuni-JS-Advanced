
function lowestPrice(input){

    let result = [];
    for (const product of input) {
        let [town, productName, price] = product.split(' | ');

        const currProduct = {
            id: productName,
            price: Number(price),
            place: town
        }

        if(!result.some(p => p.id === currProduct.id)){
            result.push(currProduct);
        }

        const compareProduct = result.find(p => p.id === productName);

        if(Number(price) < compareProduct.price){
            compareProduct.place = town;
            compareProduct.price = Number(price);
        }
    }

    result.forEach(element => {
        console.log(`${element.id} -> ${element.price} (${element.place})`)
    });
}

lowestPrice(['Sofia City | Audi | 100000', 
'Sofia City | BMW | 100000', 
'Sofia City | Mitsubishi | 10000', 
'Sofia City | Mercedes | 10000', 
'Sofia City | NoOffenseToCarLovers | 0', 
'Mexico City | Audi | 1000', 
'Mexico City | BMW | 99999', 
'Mexico City | Mitsubishi | 10000',
 'New York City | Mitsubishi | 1000', 
 'Washington City | Mercedes | 1000'])