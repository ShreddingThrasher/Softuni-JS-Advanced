function solve() {
    document.getElementById('container').querySelector('button').addEventListener('click', onScreen);
    //document.getElementById('container').querySelector('button').type = 'button';
    document.querySelector('#archive button').addEventListener('click', clearArchve);
    const nameInput = document.getElementById('container').children[0];
    const hallInput = document.getElementById('container').children[1];
    const ticketPriceInput = document.getElementById('container').children[2];

    function clearArchve(event){
        let liItemsArr = Array.from(document.querySelectorAll('#archive li'));

        for (const item of liItemsArr) {
            item.remove();
        }
    }

    function onScreen(){

        if(nameInput.value && hallInput.value && Number(ticketPriceInput.value)){
            let name = nameInput.value;
            let hall = hallInput.value;
            let ticketPrice = Number(ticketPriceInput.value);

            let liElement = document.createElement('li');
            let spanElement = document.createElement('span');
            spanElement.textContent = name;
            liElement.appendChild(spanElement);

            let strongElement = document.createElement('strong');
            strongElement.textContent = `Hall: ${hall}`;
            liElement.appendChild(strongElement);

            let divElement = document.createElement('div');

            let strongPriceElement = document.createElement('strong');
            strongPriceElement.textContent = ticketPrice.toFixed(2);
            divElement.appendChild(strongPriceElement);

            let inputElement = document.createElement('input');
            inputElement.placeholder = 'Tickets Sold';
            divElement.appendChild(inputElement);

            let buttonElement = document.createElement('button');
            buttonElement.textContent = 'Archive';
            buttonElement.addEventListener('click', archiveButtonClick);
            divElement.appendChild(buttonElement);

            liElement.appendChild(divElement);

            document.getElementById('movies').querySelector('ul').appendChild(liElement);
        }

        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';

        function archiveButtonClick(event){
            let input = event.target.parentNode.children[1];
            
            if(input.value && Number(input.value) >= 0){
                
                let liElement = document.createElement('li');
                let spanElement = document.createElement('span');
                spanElement.textContent = event.target.parentNode.previousSibling.previousSibling.textContent;
                liElement.appendChild(spanElement);

                let strongElement = document.createElement('strong');
                let moviePrice = Number(event.target.parentNode.children[0].textContent);
                let tickets = Number(event.target.previousSibling.value);
                strongElement.textContent = `Total amount: ${(moviePrice * tickets).toFixed(2)}`;
                liElement.appendChild(strongElement);
                
                let buttonElement = document.createElement('button');
                buttonElement.textContent = 'Delete';
                buttonElement.addEventListener('click', (event) => event.target.parentNode.remove());
                liElement.appendChild(buttonElement);

                document.querySelector('#archive ul').appendChild(liElement);
                event.target.parentNode.parentNode.remove();
            }
        }
    }
}