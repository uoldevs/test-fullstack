/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/usersRoute');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
