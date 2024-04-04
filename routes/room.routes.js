const {
  createRoom,
  getAllRooms,
  getSingleRoom,
  updateRoom,
  deleteRoom,
} = require("../controller/room.controller");

const roomRouter = require("express").Router();

roomRouter.post("/", createRoom);
roomRouter.get("/", getAllRooms);
roomRouter.get("/:roomId", getSingleRoom);
roomRouter.put("/:roomId", updateRoom);
roomRouter.delete("/:roomId", deleteRoom);
module.exports = roomRouter;
