
function carFactory(clientModel){

    let model = clientModel['model'];
    let power = clientModel['power'];
    let carriage = clientModel['carriage'];
    let color = clientModel['color'];
    let wheels = clientModel['wheelsize'];

    const car = {};
    car['model'] = model;

    const engine = {
        power: 0,
        volume: 0
    };

    if(power <= 90){
        engine['power'] = 90;
        engine['volume'] = 1800;

        car['engine'] = engine;
    }
    else if(power <= 120){
        engine['power'] = 120;
        engine['volume'] = 2400;

        car['engine'] = engine;
    }
    else{
        engine['power'] = 200;
        engine['volume'] = 3500;

        car['engine'] = engine;
    }

    car['carriage'] = {type: carriage, color: color};

    if(wheels % 2 != 0){
        car['wheels'] = [wheels, wheels, wheels, wheels];
    }
    else{
        let size = wheels - 1;
        car['wheels'] = [size, size, size, size];
    }

    return car;
}

const obj = carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });

console.log(obj['wheels']);