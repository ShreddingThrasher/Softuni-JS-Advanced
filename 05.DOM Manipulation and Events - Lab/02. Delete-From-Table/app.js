function deleteByEmail() {
    let table = Array.from(document.getElementsByTagName('tbody')[0].children);
    let inputField = document.getElementsByTagName('input')[0];

    let searchPattern = inputField.value;
    let itemToDelete = {};
    let deleted = false;

    for (const row of table) {
        
        if(row.innerHTML.includes(`<td>${searchPattern}</td>`)){
            itemToDelete = row;
            deleted = true;
        }
    }

    if(deleted){
        document.getElementsByTagName('tbody')[0].removeChild(itemToDelete);
        document.getElementById('result').textContent = 'Deleted.'
    } else{
        document.getElementById('result').textContent = 'Not found.'
    }
    inputField.value = '';
}