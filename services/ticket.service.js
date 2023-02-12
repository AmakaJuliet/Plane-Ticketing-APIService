const ticketModel = require("../models/ticket.model");
const planeModel = require("../models/plane.model");

class TicketService {
 constructor() {}

  async book(payload) {
    try {
      const { plane_id, passenger_name, passenger_email } = payload;

      const plane = await planeModel.findOne({ plane_id }).exec();

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
        plane_id,
        class: payload.class,
        passenger_email,
        passenger_name,
        ticket_number,
        ...data
      })

      await ticket.save();

      return ticket;

    } catch (error) {
      return error;
    }
  }

  async cancel(ticket_id) {
    try {
      const ticket = await ticketModel.findOne({ _id: ticket_id }).exec();

      if (!ticket) {
        throw new Error("Ticket not found");
      }

      const delete_ticket = await ticketModel.deleteOne({ _id: ticket_id}).exec();

      return delete_ticket;

    } catch (error) {
      return error;
    }
  }

  

  async change_class(ticket_id, ticket_class) {
    try {

      const ticket = await ticketModel.findOne({ _id: ticket_id }).exec();

      if (!ticket) {
        throw new Error("Ticket not found");
      }
      
      const plane = await planeModel.findOne({ plane_id: ticket.plane_id }).exec();

      if (!plane) {
        throw new Error("Plane not found");
      }
      
      let price;

      if (ticket.class === "BUSINESS") {
        price = plane.ticket_classes[0].price;
      } else {
        price = plane.ticket_classes[1].price;
      }


      const ticket_update = await ticketModel.updateOne({ _id: ticket_id}, { class: ticket_class, price }).exec()
      return ticket_update;
    } catch (error) {
      return error;
    }
  }

  
}

module.exports = TicketService;