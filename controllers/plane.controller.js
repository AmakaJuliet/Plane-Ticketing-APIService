const { ValidationException, NotFoundException } = require("../@helpers/errorHandlers");
const PlaneService = require("../services/plane.service");

const planeService = new PlaneService();

async function addPlane(req, res, next ) {
  try {
    
    //validation
    const { name, routes, ticket_classes} = req.body;
    if (!name) {
      throw new ValidationException("plane name is required", 400)
    }

    if (!routes) {
      throw new ValidationException("routes are required", 400)
    }

    if (!ticket_classes) {
      throw new ValidationException("ticket_classes are required", 400)
    }
    const results = await planeService.addPlane(req.body);

    return res.status(201).json({
      status: "success",
      message: "Plane added successfully",
      data: results
    });
  } catch (error) {
    next(error);
  }
}

async function getScheduleForPlane(req, res, next ) {
  try {
    const results = await planeService.getScheduleForPlane(req.params.plane_id);

    if(!results) {
      throw new NotFoundException("plane not found", 404)
    }

    return res.status(201).json({
      status: "success",
      message: "Schedule fetched successfully",
      data: results
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { addPlane, getScheduleForPlane };