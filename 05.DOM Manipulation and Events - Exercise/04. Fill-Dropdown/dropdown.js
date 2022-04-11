function addItem() {
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.text = textInput.value;
    option.value = valueInput.value;

    document.getElementById('menu').appendChild(option);
    textInput.value = '';
    valueInput.value = '';
}