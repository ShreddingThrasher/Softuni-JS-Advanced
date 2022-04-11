function factory(funcLibrary, ordersArr){
    const resultObjects = [];

    for (const order of ordersArr) {
        const currObj = {};
        currObj['name'] = order['template']['name'];
        
        for (const part of order['parts']) {
            currObj[part] = funcLibrary[part];
        }

        resultObjects.push(currObj);
    }

    return resultObjects;
}