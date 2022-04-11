function generateReport() {
    let checkBoxes = Array.from(document.getElementsByTagName('thead')[0].querySelectorAll('input'));
    let checked = [];
    
    for (const checkBox of checkBoxes) {
        if(checkBox.checked){
            checked.push(checkBoxes.indexOf(checkBox));
        }
    }

    let tableData = Array.from(document.getElementsByTagName('tbody')[0].children);
    let result = [];

    for (const row of tableData) {
        const currObj = {};
        for (const index of checked) {
            let key = checkBoxes[index].parentNode.textContent.trim().toLowerCase();
            currObj[key] = row.children[index].textContent;
        }

        result.push(currObj);
    }

    document.getElementById('output').value = JSON.stringify(result);
}