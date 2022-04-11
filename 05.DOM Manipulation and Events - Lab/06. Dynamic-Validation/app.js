function validate() {
    let inputField = document.getElementById('email');
    inputField.addEventListener('change', checkEmail);

    function checkEmail(ev){
        let text = ev.target.value;
        let regex = /[a-z]+@[a-z]+\.[a-z]+/;

        if(!regex.test(text)){
            ev.target.className = 'error';
        } else{
            ev.target.className = '';
        }
    }
}