function focused() {
    let inputs = document.getElementsByTagName('input');

    for (const input of inputs) {
        input.addEventListener('focus', inputFocus);
        input.addEventListener('blur', inputBlurred);
    }

    function inputFocus(ev){
        ev.target.parentNode.className = 'focused';
    }
    
    function inputBlurred(ev){
        ev.target.parentNode.className = '';
    }
}