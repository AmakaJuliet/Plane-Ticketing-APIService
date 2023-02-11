if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require("express");
const connectDb = require("./@helpers/db");
const ticketRouter = require("./routes/ticket.router");
const planeRouter = require("./routes/plane.router");

const app = express();
connectDb();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const api_version = "v1";

app.get(`/${api_version}`, (req, res, next) => {
    return res.status(200).json({
      status: "success",
      message: "Welcome to Plane Ticketing API Service v1",
    });
})

app.use(`/${api_version}/planes`, planeRouter);
app.use(`/${api_version}/tickets`, ticketRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Plane Ticketing APIService is running on ${PORT}`);
})