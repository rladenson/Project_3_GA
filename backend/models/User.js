const mongoose = require("mongoose");


const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    password:{ type: String, required: true },
    picture:{ type: String,
    default:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
