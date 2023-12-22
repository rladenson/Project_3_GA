const mongoose = require("mongoose");
const { DATABASE_URL } = process.env;

mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection
    .on("open", () => console.log("your connection is open"))
    .on("close", () => console.log("your connection is closed"))
    .on("error", (error) => console.log(error));

module.exports = {
    
}