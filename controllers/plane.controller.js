const PlaneService = require("../services/plane.service");

const planeService = new PlaneService();

async function addPlane(req, res, next ) {
  try {

    const results = await planeService.addPlane(req.body);

    return res.status(201).json({
       status: "success",
       message: "Plane added successfully",
       data: results
    });
  } catch (error) {
    return res.json({
      status: "error",
      message: error.message,
      data: null
    });
  }
}

async function getScheduleForPlane(req, res, next ) {
  try {

    const results = await planeService.getScheduleForPlane(req.params.plane_id);

    return res.status(201).json({
       status: "success",
       message: "Schedule fetched successfully",
       data: results
    });
  } catch (error) {
    return res.json({
      status: "error",
      message: error.message,
      data: null
    });
  }
}

module.exports = { addPlane, getScheduleForPlane };