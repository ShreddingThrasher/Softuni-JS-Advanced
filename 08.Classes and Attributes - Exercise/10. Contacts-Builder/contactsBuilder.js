
class Contact {

    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.$online = false;
        this.divElement = document.createElement('div');
    }

    get online(){
        return this.$online;
    }

    set online(value) {

        this.$online = value;

        if (this.$online === true) {
            this.divElement.classList.add('online');
        } else {
            this.divElement.classList.remove('online');
        }

    }

    render(id) {
        let articleElement = document.createElement('article');

        this.divElement.classList.add('title');
        this.divElement.textContent = `${this.firstName} ${this.lastName}`;

        let buttonElement = document.createElement('button');
        buttonElement.textContent = '\u2139';
        buttonElement.addEventListener('click', buttonClick);
        this.divElement.appendChild(buttonElement);
        articleElement.appendChild(this.divElement);

        let divInfoElement = document.createElement('div');
        divInfoElement.className = 'info'
        divInfoElement.style.display = 'none';
        
        let spanPhoneElement = document.createElement('span');
        spanPhoneElement.textContent = `\u260E ${this.phone}`;
        divInfoElement.appendChild(spanPhoneElement);

        let spanEmailElement = document.createElement('span');
        spanEmailElement.textContent = `\u2709 ${this.email}`;
        divInfoElement.appendChild(spanEmailElement);

        articleElement.appendChild(divInfoElement);

        document.getElementById(id).appendChild(articleElement);

        function buttonClick(e){
            
            if(divInfoElement.style.display === 'none'){
                divInfoElement.style.display = 'block';
            } else{
                divInfoElement.style.display = 'none';
            }
        }
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);
  
  
  
