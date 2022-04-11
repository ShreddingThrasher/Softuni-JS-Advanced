function addItem() {
    let listItem = document.createElement('li');
    let input = document.getElementById('newItemText');
    let text = input.value;
    listItem.textContent = text;

    let anchorElement = document.createElement('a');
    anchorElement.textContent = '[Delete]';
    anchorElement.href = '#';
    anchorElement.addEventListener('click', (event) => {
        event.target.parentNode.remove();
    })

    listItem.appendChild(anchorElement);
    input.value = '';
    document.getElementById('items').appendChild(listItem);
}