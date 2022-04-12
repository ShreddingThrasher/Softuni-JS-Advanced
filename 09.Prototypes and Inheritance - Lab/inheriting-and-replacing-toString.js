function personAndTeacher(){

    class Person {
        constructor(fname, email){
            this.name = fname;
            this.email = email;
        }

        toString(){
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }
    
    class Teacher extends Person {
        constructor(fname, email, subject){
            super(fname, email);
            this.subject = subject;
        }

        toString(){
            return `${super.toString().substring(0, super.toString().length - 1)}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(fname, email, course){
            super(fname, email);
            this.course = course;
        }

        toString(){
            return `${super.toString().substring(0, super.toString().length - 1)}, course: ${this.course})`;
        }
        
    }

    return {Person, Teacher, Student};
}