function solve() {
    let text = document.getElementById('text').value;
    let desiredCase = document.getElementById('naming-convention').value;
    let resultField = document.getElementById('result');
    let arr = text.split(' ');

    if(desiredCase == 'Camel Case'){
        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i].toLowerCase();

            if(i != 0){
                arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
            }
        }

        resultField.textContent = arr.join('');

    } else if(desiredCase == 'Pascal Case'){
        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i].toLowerCase();
            arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
        }

        resultField.textContent = arr.join('');

    } else{
        resultField.textContent = 'Error!'
    }
}