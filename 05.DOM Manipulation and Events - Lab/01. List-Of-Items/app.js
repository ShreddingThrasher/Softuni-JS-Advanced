function addItem() {
    let listItem = document.createElement('li');
    let input = document.getElementById('newItemText');
    let text = input.value;
    listItem.textContent = text;
    input.value = '';
    document.getElementById('items').appendChild(listItem);
}