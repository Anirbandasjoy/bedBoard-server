const express = require("express");
const app = express();
const createError = require("http-errors");
const { errorResponse } = require("./helper/response");
const roomRouter = require("./routes/room.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/room", roomRouter);

app.get("/", (req, res) => {
  res.send("BedBoard Server is running ...");
});

app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
