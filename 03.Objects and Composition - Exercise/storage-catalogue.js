
function storeCatalogue(input){
    const catalogue = {};

    for (const iterator of input) {
        let [productName, price] = iterator.split(' : ');

        const currProduct = {
            productName: productName,
            price: price
        };

        if(!Object.keys(catalogue).some(p => p[0] === productName[0])){
            catalogue[productName[0]] = [];
        }

        catalogue[productName[0]].push(currProduct);
    }

    for (const key of Object.keys(catalogue).sort()) {
        console.log(key);
        for (const product of catalogue[key].sort((a, b) => (a.productName).localeCompare(b.productName))) {
            console.log(`  ${product.productName}: ${product.price}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])