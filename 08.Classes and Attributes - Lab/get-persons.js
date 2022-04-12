function getPersons(){

    class Person {

        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let people = [];

    let firstPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    people.push(firstPerson);

    let secondPerson = new Person('SoftUni');
    people.push(secondPerson);

    let thirdPerson = new Person('Stephan', 'Johnson', 25);
    people.push(thirdPerson);

    let fourthPerson = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    people.push(fourthPerson);

    return people;
}