import { Order } from "./Order";
import { Ticket } from "./Ticket";

const input: string[] = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];

const order = Order.Status as string;

let tickets = input
    .map(s => s.split("|"))
    .map(t => new Ticket(t[0], Number.parseFloat(t[1]), t[2]));

let sort: Order = order as Order;

if(sort == Order.Destination){
    console.log('Destination');
    
    tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination))
}else if(sort == Order.Status){
    console.log('Status');
    

    tickets = tickets.sort((a, b) => a.status.localeCompare(b.status))
}
    
console.log(tickets);

    