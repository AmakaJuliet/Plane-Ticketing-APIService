const { addPlane, getScheduleForPlane } = require("../controllers/plane.controller");
const PlaneService = require("../services/plane.service");

const planeRouter = require("express").Router();

planeRouter.post(`/`, addPlane )
planeRouter.get(`/:plane_id/schedules`, getScheduleForPlane)
//planeRouter.get(`/:plane_id/seats_availability`,)

module.exports = planeRouter;