const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "reflectionApi",
  password: "1417",
  port: "5432",
});

module.exports = pool;
