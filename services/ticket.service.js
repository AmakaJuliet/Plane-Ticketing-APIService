const ticketModel = require("../models/ticket.model");
const planeModel = require("../models/plane.model");

class TicketService {
 constructor() {}

 async book(payload) {
   try {
     const plane = await planeModel.findOne({ plane_id: payload.plane_id}).exec();

     if (!plane) {
       throw new Error("Plane not found");
     }

     const { name, routes, ticket_classes } = payload;
     const randomInt1 = Math.floor(Math.random() * 10) + 1;
     const randomInt2 = Math.floor(Math.random() * 10) + 1;
     const randomInt3 = Math.floor(Math.random() * 10) + 1;

     const ticket_number = `TICKET_${randomInt1}${randomInt2}${randomInt3}`;

     const data = {};

     data.departure_station = plane.routes[0].departure_station;
     data.arrival_station = plane.routes[0].arrival_station;
     data.journey_date = plane.routes[0].journey_date;

     if (payload.class === "FIRST") {
       data.price = plane.ticket_classes[1].price
     } else {
       data.price = plane.ticket_classes[0].price
     }

     const ticket = new ticketModel({
        
     })
   } catch (error) {
     return error;
   }
 }

 async cancel(ticket_id) {

 }

 async change_class(ticket_id) {

 }
}

module.exports = TicketService;