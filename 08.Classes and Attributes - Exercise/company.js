
class Company {

    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){

        if(isInvalidInput(name) || isInvalidInput(salary)
           || isInvalidInput(position) || isInvalidInput(department) || Number(salary) < 0){
               throw new Error('Invalid input!');
        }

        if(!this.departments[department]){

            this.departments[department] = {};
            this.departments[department].name = department;
            this.departments[department].employees = [];
        }

        let salaryAmount = Number(salary);
        let employee = {name, salary: salaryAmount, position};
        this.departments[department].employees.push(employee)
        return `New employee is hired. Name: ${name}. Position: ${position}`;

        function isInvalidInput(input){
            let regex = /^ *$/;
            if(input === '' || input === undefined || input === null || regex.test(input)){
                return true;
            }

            return false;
        }
    }

    bestDepartment(){
        let bestAverageSalary = 0;
        let bestDepartment = {};

        for (const key in this.departments) {
            
            let totalSalary = this.departments[key].employees.reduce((a, b) => a + b.salary, 0);
            let averageSalary = totalSalary / this.departments[key].employees.length;

            if(averageSalary > bestAverageSalary){
                bestAverageSalary = averageSalary;
                bestDepartment = this.departments[key];
            }
        }

        let result = `Best Department is: ${bestDepartment.name}\n`;
        result += `Average salary: ${bestAverageSalary.toFixed(2)}\n`;

        bestDepartment.employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
        result += bestDepartment.employees.map(x => `${x.name} ${x.salary} ${x.position}`).join('\n');

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());