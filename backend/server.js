require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const connection = require('./models/index')
const cors = require("cors");
const routes = require("./routes/index");


app.use("/", routes);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
