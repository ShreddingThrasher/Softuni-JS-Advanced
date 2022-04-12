function validate() {
    document.getElementById('email').addEventListener('change', validateEmail);

    function validateEmail(e){
        let value = e.target.value;
        let emailRegex = /^[a-z]+\@[a-z]+\.[a-z]+$/;

        if(!value.match(emailRegex)){
            e.target.className = 'error';
        } else{
            e.target.className = '';
        }
    }
}