class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        Object.defineProperty(this, 'fullName', {
            set: function(value){
                let [fname, lname] = value.split(' ');
                this.firstName = fname;
                this.lastName = lname;
            },
            get: function(){
                return `${this.firstName} ${this.lastName}`;
            }
        })
    }
}