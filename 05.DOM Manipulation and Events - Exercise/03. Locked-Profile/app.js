function lockedProfile() {
    let profileButtons = document.getElementsByTagName('button');

    for (const button of profileButtons) {
        button.addEventListener('click', profileButtonClick)
    }

    function profileButtonClick(event){

        if(event.target.parentNode.children[2].checked){
            return;
        } else{
            
            if(event.target.textContent === 'Show more'){
                event.target.textContent = 'Hide it';
                event.target.parentNode.children[9].style.display = 'block';
            } else{
                event.target.textContent = 'Show more';
                event.target.parentNode.children[9].style.display = 'none';
            }
        }
    }
}