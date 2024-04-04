const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "anirban",
  database: "bedboard",
  port: 5432,
});

module.exports = pool;
