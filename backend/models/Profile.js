const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    imgUser: {type: [String], required: true},
    name: {type: String, required: true},
    description: {type: String, required: false},
    bio: {type: String, required: false},
    social_link1: {type: String, required: false},
    social_link2: {type: String, required: false},
    social_link3: {type: String, required: false},
    social_link4: {type: String, required: false},
});

const UserInfo = mongoose.model('UserInfo', ProfileSchema);

module.exports = UserInfo;