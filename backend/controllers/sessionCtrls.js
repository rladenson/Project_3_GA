const bcrypt = require("bcrypt");
const db = require("../models");

const makeSession = (req, res) => {
    db.User.findOne({ username: req.body.username }, (err, foundUser) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else if (!foundUser) {
            res.status(404).send("Could not find");
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser;
                console.log("POST", req.session);
                res.status(200).send(foundUser);
            } else {
                res.status(401, "Password does not match");
            }
        }
    });
};

module.exports = {
    makeSession,
};
