const TicketService = require("../services/ticket.service");

const ticketRouter = require("express").Router();
const ticketService =  new TicketService();

//ticketRouter.post(`/book`)
//ticketRouter.delete(`/cancel/:ticket_id`)
//ticketRouter.patch(`/change_class`)

module.exports = ticketRouter;