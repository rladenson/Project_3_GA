require("dotenv").config();
const {PORT} = process.env;
const express = require('express')
const app = express();

const connection = require('./models/index')

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`))