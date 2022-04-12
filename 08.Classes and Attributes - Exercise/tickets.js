


function ticketsFunc(input, criteria){

    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    let tickets = [];

    for (const ticket of input) {
        let [destination, price, status] = ticket.split('|');
        tickets.push(new Ticket(destination, Number(price), status));
    }

    return tickets.sort(dynamicSort(criteria));

    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
}

let tickets = ticketsFunc(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'], 'status');

for (const ticket of tickets) {
    console.log(ticket);
}