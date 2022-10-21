const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/v1", routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
