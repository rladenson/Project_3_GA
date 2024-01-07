const mongoose = require("mongoose");


const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    password:{ type: String, required: true },
    picture:{ type: String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS650EKUB1QnT3gBSusaW5KRZTJMrCjY4-AeQ&usqp=CAU"
    },
    title: { type: String },
    followers:[{ type:ObjectId, ref:"User" }],
    following:[{ type:ObjectId, ref:"User" }],
    resetToken:String,
    expireToken:String
}, {timestamps:true})

const User = mongoose.model("User", userSchema);

module.exports = User;

// const userSchema = new mongoose.Schema({
//     imgUser: { type: String, required: true },
//     name: { type: String, required: true },
//     description: { type: String, required: false },
//     bio: { type: String, required: false },
//     gitHub_link: { type: String, required: false },
//     linkedIn_link: { type: String, required: false },
//     stackOverFlow_link: { type: String, required: false },
//     twitter_link: { type: String, required: false },
//     faceBook_link: { type: String, required: false },
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// const User = mongoose.model("User", ProfileSchema);

// module.exports = User;
