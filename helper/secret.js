require("dotenv").config();
const PORT = process.env.PORT || 4000;
const pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  PORT,
  pool,
  uuidv4,
};
