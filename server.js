const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});