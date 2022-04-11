function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', generateFurniture);
    document.getElementsByTagName('button')[1].addEventListener('click', buyButtonClick);

    function buyButtonClick(){
        let checkBoxes = document.getElementsByTagName('tbody')[0].querySelectorAll('input');
        let outputArea = document.getElementsByTagName('textarea')[1];

        let boughtFurniture = [];
        let totalPrice = 0;
        let totalDecorationFactor = 0;

        for (const checkBox of checkBoxes) {

            if(checkBox.checked){
                let furnitureInfo = checkBox.parentNode.parentNode.children;

                boughtFurniture.push(furnitureInfo[1].children[0].textContent);
                totalPrice += Number(furnitureInfo[2].children[0].textContent);
                totalDecorationFactor += Number(furnitureInfo[3].children[0].textContent)
            }
        }

        outputArea.value = `Bought furniture: ${boughtFurniture.join(', ')}` + '\n';
        outputArea.value += `Total price: ${totalPrice.toFixed(2)}` + '\n';
        outputArea.value += `Average decoration factor: ${totalDecorationFactor / boughtFurniture.length}`;
    }

    function generateFurniture(){
        let objArray = JSON.parse(document.getElementsByTagName('textarea')[0].value);
        let table = document.getElementsByTagName('tbody')[0];

        for (const obj of objArray) {

            let tableRow = document.createElement('tr');

            for (const key of Object.keys(obj)) {
                
                let td = document.createElement('td');
                let element = {};

                if(key === 'img'){
                    element = document.createElement('img');
                    element.src = obj[key];
                } else{
                    element = document.createElement('p');
                    element.textContent = obj[key];
                }

                td.appendChild(element);
                tableRow.appendChild(td);
            }

            let tdCheckBox = document.createElement('td');
            let checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            tdCheckBox.appendChild(checkBox);
            
            tableRow.appendChild(tdCheckBox);
            table.appendChild(tableRow);
        }
    }
}