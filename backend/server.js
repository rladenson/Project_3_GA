require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const connection = require('./models/index')
const cors = require("cors");
const routes = require("./routes/index");
const session = require("express-session");


app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
        resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
        saveUninitialized: false, // default  more info: https://www.npmjs.com/package/express-session#resave
    })
);

app.use("/", routes);

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
