function solve() {
    const selectTo = document.getElementById('selectMenuTo');
    const binary = document.createElement('option');
    binary.textContent = 'Binary';
    binary.value = 'binary';
    const hexadecimal = document.createElement('option');
    hexadecimal.textContent = 'Hexadecimal';
    hexadecimal.value = 'hexadecimal';
    selectTo.appendChild(binary);
    selectTo.appendChild(hexadecimal);
    
    document.getElementsByTagName('button')[0].addEventListener('click', buttonClick)

    function buttonClick(){

        let input = document.getElementById('input');
        let output = document.getElementById('result');

        let numToConvert = Number(input.value);
        let result = '';

        if(selectTo.value == 'binary'){
            result = numToConvert.toString(2);
        } else if(selectTo.value == 'hexadecimal'){
            result = numToConvert.toString(16).toUpperCase();
        }
        
        output.value = result;
    }
}