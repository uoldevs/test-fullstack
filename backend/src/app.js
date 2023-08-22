const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./controllers/user.controller');
const { createUserSchema, updateUserSchema } = require('./validators/userValidation');
const validateRequest = require('./middlewares/validateRequest');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
}));

app.get('/user', User.getAllUsers);

app.post('/user', validateRequest(createUserSchema), User.createUser);

app.put('/user/:id', validateRequest(updateUserSchema), User.updateUser);

app.use(errorHandler);

module.exports = app;
