const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "finalproject_1",
  password: "poisedon4",
  port: 5432,
});

module.exports = pool;
