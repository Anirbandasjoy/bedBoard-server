const { errorResponse, successResponse } = require("../helper/response");
const { uuidv4, pool } = require("../helper/secret");

// create a new room
const createRoom = async (req, res, next) => {
  try {
    const roomId = uuidv4();
    const { bedrent, bednumber, rating, picture, emptybed } = req.body;
    const newRoom = await pool.query(
        "INSERT INTO rooms (roomid, bedrent, bednumber, rating, picture, emptybed) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [roomId, bedrent, bednumber, rating, picture, emptybed]
      );
    successResponse(res, {
      message: "Create a new room",
      payload: newRoom.rows,
    });
  } catch (error) {
    errorResponse(res, {
      message: error.message,
    });
    next();
  }
};

// get all room
const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await pool.query("SELECT * FROM rooms");
    successResponse(res, {
      message: "Return All Room",
      payload: rooms.rows,
    });
  } catch (error) {
    errorResponse(res, {
      message: error.message,
    });
    next();
  }
};

// get a single room
const getSingleRoom = async (req, res, next) => {
  try {
    const roomId = req.params.roomId;
    const room = await pool.query("SELECT * FROM rooms WHERE roomId=$1", [
      roomId,
    ]);
    successResponse(res, {
      message: "Return a Single Room",
      payload: room.rows,
    });
  } catch (error) {
    errorResponse(res, {
      message: error.message,
    });
    next();
  }
};

// update room
const updateRoom = async (req, res, next) => {
  try {
    const roomId = req.params.roomId;
    const { bedrent, bednumber, rating, picture, emptybed } = req.body;
    const updatedRoom = await pool.query(
      "UPDATE rooms SET bedrent=$1, bednumber=$2, rating=$3, picture=$4, emptybed=$5 WHERE roomId=$6 RETURNING *",
      [bedrent, bednumber, rating, picture, emptybed, roomId]
    );
    successResponse(res, {
      message: "Updated Room Successfully",
      payload: updatedRoom.rows,
    });
  } catch (error) {
    errorResponse(res, {
      message: error.message,
    });
    next();
  }
};

// delete room

const deleteRoom = async (req, res, next) => {
  try {
    const roomId = req.params.roomId;
    await pool.query("DELETE FROM rooms WHERE roomId=$1", [roomId]);
    successResponse(res, {
      message: "Deleted Room",
    });
  } catch (error) {
    errorResponse(res, {
      message: error.message,
    });
    next();
  }
};

module.exports = {
  createRoom,
  getAllRooms,
  getSingleRoom,
  updateRoom,
  deleteRoom,
};
