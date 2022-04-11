function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    console.log(document.getElementById('workers').children);

    function onClick () {
        let inputArea = document.getElementById('inputs').children[1];
        let arr = JSON.parse(inputArea.value);
        let restaurants = [];

        for (const entry of arr) {
            let [restaurantName, workers] = entry.split(' - ');
            let workersArr = workers.split(', ');
            
            if(!restaurants.some(r => r.name === restaurantName)){
                restaurants.push({name: restaurantName, workers: []});
            }

            let restaurant = restaurants.find(r => r.name === restaurantName);
            
            for (const worker of workersArr) {
                let [name, slry] = worker.split(' ');
                let salary = Number(slry);

                restaurant.workers.push({name, salary});
            }

            let salarySum = restaurant.workers.reduce((a, b) => a + b.salary, 0);
            restaurant.averageSalary = salarySum / restaurant.workers.length || 0;
        }

        let bestRestaurant = restaurants.sort((a, b) => b.averageSalary - a.averageSalary)[0];
        let bestSalary = bestRestaurant.workers.sort((a, b) => b.salary - a.salary)[0].salary;
        
        let restourantOutput = document.getElementById('bestRestaurant').querySelector('p');
        let workersOutput = document.getElementById('workers').querySelector('p');

        restourantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
        let workersResult = '';

        for (const worker of bestRestaurant.workers) {
            workersResult += `Name: ${worker.name} With Salary: ${worker.salary} `;
        }

        workersOutput.textContent = workersResult;
    }
}