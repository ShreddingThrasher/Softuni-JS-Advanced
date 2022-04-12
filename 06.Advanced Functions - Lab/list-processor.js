function listProcessor(inputArr){

    let funcLibrary = processor();

    for (const line of inputArr) {
        let args = line.split(' ');
        funcLibrary[args[0]](args[1]);
    }

    function processor(){
        let innerCollection = [];

        const functionsObject = {
            add: (str) => {
                innerCollection.push(str);
            },
            remove: (str) => {
                innerCollection = innerCollection.filter(x => x !== str);
            },
            print: () => {
                console.log(innerCollection.join(','));
            }
        }

        return functionsObject;
    }
}