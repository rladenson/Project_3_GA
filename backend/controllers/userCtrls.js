const db = require("../models");
const bcrypt = require("bcrypt");

// TODO ROUTE FUNCTIONS (NOT ACTIONS) GO HERE

const getUser = async (req, res) => {
    let user = await db.User.findOne({ username: req.params.username });
    user = user._doc;
    if (!user) {
        return res.send(404);
    }
    if (req.query.withProjects) {
        user.projects = await db.Project.find({ user: user });
        res.send(user);
    } else {
        res.send(user);
    }
};

const createUser = (req, res) => {
    console.log(req.body);
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    );
    db.User.create(req.body, (err, createdUser) => {
        if (err) {
            console.log("error", err)
            res.status(500).send(err);
        } else if (!createdUser) {
            res.status(400);
        } else {
            console.log("user is created", createdUser);
            res.status(200).send(createUser);
        }
    });
};

const updateUser = (req, res) => {
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(
            req.body.password,
            bcrypt.genSaltSync(10)
        );
    }
    db.User.findByIdAndUpdate(req.session.currentUser._id, req.body, {
        new: true,
    }).then((updatedUser) => {
        if (!updatedUser) {
            res.status(400).json({ message: "Could not update profile." });
        } else {
            res.status(200).json({ Data: updatedUser });
        }
    });
};

const deleteUser = (req, res) => {
    db.User.findByIdAndDelete(req.session.currentUser._id, (deletedUser) => {
        if (!deletedUser) {
            res.status(400).json({ message: "Could not delete user account." });
        } else {
            res.status(200).json({
                Data: deleteUser,
                message: "This account has been deleted",
            });
        }
    });
};

module.exports = {
    // TODO ROUTE NAMES GO HERE
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
