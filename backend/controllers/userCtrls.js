const db = require("../models");

// TODO ROUTE FUNCTIONS (NOT ACTIONS) GO HERE

const updateUser = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    console.log("update user")
        .then((updatedUser) => {
            if(!updatedUser) {
                res.status(400).json({message: "Could not update profile."})
            } else {
                res.status(200).json({Data: updatedUser})
            }
        }) 
}

const deleteUser = (req, res) => {
    db.User.findByIdAndDelete(req.params.id)
    .then((deletedUser) =>{
        if(!deletedUser) {
            res.status(400).json({message: "Could not delete user account."})
        } else {
            res.status(200).json({Data: deleteUser, message: "This account has been deleted"})
        }
    })
}


module.exports = {
    // TODO ROUTE NAMES GO HERE
    updateUser,
    deleteUser,
};