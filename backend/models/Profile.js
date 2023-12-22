const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    imgUser: {type: [String], required: true},
    name: {type: String, required: true},
    description: {type: String, required: false},
    bio: {type: String, required: false},
    gitHub_link: {type: String, required: false},
    linkedIn_link: {type: String, required: false},
    stackOverFlow_link: {type: String, required: false},
    twitter_link: {type: String, required: false},
    faceBook_link: {type: String, required: false},
});

const UserInfo = mongoose.model('UserInfo', ProfileSchema);

module.exports = UserInfo;