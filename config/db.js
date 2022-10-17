const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
<<<<<<< HEAD
  database: "reflectionApi",
  password: "1417",
  port: "5432",
=======
  database: "finalproject_1",
  password: "poisedon4",
  port: 5432,
>>>>>>> 9ba382735e198242e7040f608810533888ce0bf2
});

module.exports = pool;
