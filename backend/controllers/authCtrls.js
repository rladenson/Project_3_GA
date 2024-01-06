// const bcrypt = require("bcrypt");
// const db = require("../models");

// const makeSession = (req, res) => {
//     db.User.findOne({ username: req.body.username }, (err, foundUser) => {
//         if (err) {
//             console.log(err);
//             res.send(500, err);
//         } else if (!foundUser) {
//             res.send(404);
//         } else {
//             if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//                 req.session.currentUser = foundUser;
//                 res.send(200);
//             } else {
//                 res.send(401, "Password does not match");
//             }
//         }
//     });
// };

// module.exports = {
//     makeSession,
// };
