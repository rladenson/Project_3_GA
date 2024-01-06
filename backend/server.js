require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const app = express();
// const connection = require('./models/index')
const cors = require("cors");
// const routes = require("./routes/index");
const db = mongoose.connection; //default connection object
const authRouter = require('./routes/authRoutes')
const projectRouter = require('./routes/projectRoutes')


// ENV VARIABLES
const mongoURI = process.env.MONGOURI;
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//call the routes here
//CHECK API
app.use("/api", authRouter);
app.use("/api", projectRouter);

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));



//CONNECT TO MONGO
mongoose.connect(mongoURI);

//ERROR/SUCCESS
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));
db.on("open", () => {
  console.log("Mongoose connection is open");
});