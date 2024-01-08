const mongoose = require("mongoose");


const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    password:{ type: String, required: true },
    picture:{ type: String,
    default:"https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
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
