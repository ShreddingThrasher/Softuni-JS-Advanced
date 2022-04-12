function filterEmployees(employeesInput, criteria){
    let employeesArr = JSON.parse(employeesInput);
    let criteriaArr = criteria.split('-');

    if(criteriaArr[0] === 'all'){
        let counter = 0;
        for (const employee of employeesArr) {
            console.log(`${counter++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        }
    } else{
        let counter = 0;
        for (const employee of employeesArr) {
            
            if(employee[criteriaArr[0]] === criteriaArr[1]){
                console.log(`${counter++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
            }
        }
    }
}