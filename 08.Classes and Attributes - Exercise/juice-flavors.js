
function juiceFlavors(input){
    
    let result = new Map();
    let bottles = {};

    for (const line of input) {
        let [juice, qnty] = line.split(' => ');

        if(!result.has(juice)){
            result.set(juice, 0);
        }

        result.set(juice, result.get(juice) + Number(qnty));

        if(result.get(juice) >= 1000){
            
            if(!bottles[juice]){
                bottles[juice] = 0;
            }

            let liters = Math.floor(result.get(juice) / 1000);

            for(let i = 0; i < liters; i++){
                bottles[juice]++;
                result.set(juice, result.get(juice) - 1000);
            }
        }
    }

    for (const key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);

console.log('=================');

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);