const express = require('express');
const cors = require('cors');
const clientRouter = require('./api/Routes/client.routes');
// const errorHandler = require('./middleware/error.middleware');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => res.status(200).end());
app.use(clientRouter);
// app.use(errorHandler);

module.exports = app;
