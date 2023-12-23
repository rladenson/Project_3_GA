const db = require("../models");
const bcrypt = require("bcrypt");

// TODO ROUTE FUNCTIONS (NOT ACTIONS) GO HERE

const createUser = (req, res) => {
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    );
    db.User.create(req.body, (err, createdUser) => {
        if (err) {
            res.send(500, err);
        } else if (!createdUser) {
            res.send(400);
        } else {
            console.log("user is created", createdUser);
            res.send(200, createUser);
        }
    });
};

const updateUser = (req, res) => {
    if(req.body.password) {
        req.body.password = bcrypt.hashSync(
            req.body.password,
            bcrypt.genSaltSync(10)
        );
    }
    db.User.findOneAndUpdate({username: req.params.username}, req.body, { new: true }).then((updatedUser) => {
        if (!updatedUser) {
            res.status(400).json({ message: "Could not update profile." });
        } else {
            res.status(200).json({ Data: updatedUser });
        }
    });
};

const deleteUser = (req, res) => {
    db.User.findOneAndDelete({username: req.params.username}).then((deletedUser) => {
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
    createUser,
    updateUser,
    deleteUser,
};
