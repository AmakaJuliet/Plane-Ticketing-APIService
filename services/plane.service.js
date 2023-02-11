const planeModel = require("../models/plane.model");

class PlaneService {
 constructor() {}

 async addPlane(payload) {
   const { name, routes, ticket_classes } = payload;
   const randomInt1 = Math.floor(Math.random() * 10) + 1;
   const randomInt2 = Math.floor(Math.random() * 10) + 1;
   const randomInt3 = Math.floor(Math.random() * 10) + 1;

   const plane_id = `P${randomInt1}${randomInt2}${randomInt3}`;

   try {
     const plane = new planeModel({
       name,
       plane_id,
       ticket_classes,
       routes
     });

     await plane.save();
     return plane;
   } catch (e) {
     return e;
   }
 }


 async getScheduleForPlane(plane_id) {
   try {
     const stopsExpress = [
       {
         "station": "Chicago",
         "arrival_time": "2023-02-06T09:15:00Z",
          "departure_time": "2023-02-06T09:30:00Z"
        },
        {
          "station": "Washington DC",
          "arrival_time": "2023-02-06T09:45:00Z",
          "departure_time": "2023-02-06T10:00:00Z"
        }
      ];

      const stopsTrail = [
       {
         "station": "Abuja",
         "arrival_time": "2023-02-06T09:15:00Z",
          "departure_time": "2023-02-06T09:30:00Z"
        },
        {
          "station": "Lagos",
          "arrival_time": "2023-02-06T09:45:00Z",
          "departure_time": "2023-02-06T10:00:00Z"
        }
      ];

      let schedule;

      switch (plane_id) {
        case "P886":
          schedule = stopsExpress;
          break;

        case "P8710":
          schedule = stopsTrail; 
          break;
      }

      return schedule;
    } catch (e) {
     return e;
    }
  }

 async getSeatAvailability(plane_id) {
    
 }
}

module.exports = PlaneService;