const express = require("express");

const authController = require('./controllers/authController.js')

const app = express();

app.use(express.json());

app.post('/signup', authController.signup)
app.post('/login', authController.login)

module.exports = app