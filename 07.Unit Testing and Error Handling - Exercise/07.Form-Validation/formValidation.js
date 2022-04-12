function validate() {

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const companyInput = document.getElementById('company');
    companyInput.checked = false;
    companyInput.addEventListener('change', companyFunc);
    document.getElementById('submit').addEventListener('click', validateForm);

    const validDiv = document.getElementById('valid');

    function companyFunc(e){
        const companyInfo = document.getElementById('companyInfo');

        if(e.target.checked){
            companyInfo.style.display = 'block';
        } else{
            companyInfo.style.display = 'none';
        }
        
    }

    function validateForm(e){

        e.preventDefault();

        let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
        let passwordRegex = /^[\w]{5,15}$/;
        let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;

        if(usernameInput.value.match(usernameRegex)){
            usernameInput.style.borderColor = '';
        } else{
            usernameInput.style.borderColor = 'red';
        }

        if(emailInput.value.match(emailRegex)){
            emailInput.style.borderColor = '';
        } else{
            emailInput.style.borderColor = 'red';
        }

        if(passwordInput.value.match(passwordRegex)){
            passwordInput.style.borderColor = '';
        } else{
            passwordInput.style.borderColor = 'red';
        }

        if(!confirmPasswordInput.value.match(passwordRegex) || confirmPasswordInput.value != passwordInput.value){
            confirmPasswordInput.style.borderColor = 'red';
            passwordInput.style.borderColor = 'red';
        } else{
            confirmPasswordInput.style.borderColor = '';
            passwordInput.style.borderColor = '';
        }

        if(companyInput.checked){

            const companyNumberInput = document.getElementById('companyNumber');

            if(companyNumberInput.value < 1000 || companyNumberInput.value > 9999){

                console.log('some bug');
                console.log(companyNumberInput.value);
                companyNumberInput.style.borderColor = 'red';
            } else{
                companyNumberInput.style.borderColor = '';
            }

            if(Array.from(document.querySelectorAll('form input')).some(
                x => x.style.borderColor == 'red'
            )){
                validDiv.style.display = 'none';
            } else{
                validDiv.style.display = 'block';
            }

        } else{
            if(Array.from(document.querySelectorAll('#userInfo input')).some(
                x => x.style.borderColor == 'red'
            )){
                validDiv.style.display = 'none';
            } else{
                validDiv.style.display = 'block';
            }
        }
    }
}
