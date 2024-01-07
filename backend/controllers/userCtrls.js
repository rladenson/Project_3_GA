const Project = require('../models/Project')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports.logout = async (req, res) => {

    try {
        res.clearCookie('refreshtoken', { path: '/api/refresh_token' })
        return res.json({ msg: "Logout Successfully" })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

module.exports.getMyProjects = async (req, res) => {
    Project.find({ createdBy: req.user._id })
        .populate("createdBy", "_id name")
        .then(myproject => {
            res.json({ myproject: myproject })
        })
        .catch(err => {
            res.status(500).json(({ msg: err.message }))
        })
}

exports.updateProfile = async (req, res) => {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12)
    await User.findOneAndUpdate({ _id: req.user._id }, {
        name, email, password: hashedPassword
    }, { new: true })
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({ msg: err.message })
            }
            else {
                res.json({ msg: "Update Success", result: result })
            }
        })

}

exports.followUser = async (req, res) => {
    console.log(req.body.followId);
    const followersUpdate = await User.findOneAndUpdate({_id:req.body.followId},{
        $push:{followers:req.user._id}
    },{
        new:true
    })
    .then(result=>{return result})

    if(followersUpdate){
       await User.findOneAndUpdate(req.user._id,{
            $push:{following:req.body.followId}
            
        },{new:true})
        .select("-password")
        .exec((err,result)=>{
            if(err){
                res.status(400).json(({ msg: err.message }))
            }
            console.log(result);
            res.json(result)
        })
    }
}

exports.unfollowUser = async (req, res) => {
    console.log(req.body.unfollowId);

    const followingUpdate = await User.findOneAndUpdate({_id:req.body.unfollowId},{
        $pull:{followers:req.user._id}
    },{
        new:true
    })
    .then(result=>{return result})

    if(followingUpdate){
       await User.findOneAndUpdate(req.user._id,{
        $pull:{following:req.body.unfollowId}
            
        },{new:true})
        .select("-password")
        .exec((err,result)=>{
            if(err){
                res.status(400).json(({ msg: err.message }))
            }
            console.log(result);
            res.json(result)
        })
    }
}

exports.getUserDetails = async (req, res) => {
    try {
        await User.findOne({ _id: req.params.id })
            .select("-password")
            .then(user => {
                if (!user) return res.status(400).json({ msg: "User does not exist" })

                Post.find({ postedBy: req.params._id })
                    .populate("postedBy", "_id name")
                    .exec((err, posts) => {
                        if (!posts) {
                            return res.status(400).json({ msg: "Post does not exist" })
                        }
                        res.json({ user, posts })
                    })
            })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}



exports.searchUser=(req,res)=>{
    let userPattern = new RegExp("^"+req.body.query)

    User.find({name:{$regex:userPattern}})
    .select("_id name email pic")
    .then(user=>{
        res.json({user})
    })
    .catch(err=>{
        return res.status(500).json({msg:err.message})
    })
}







// const db = require("../models");
// const bcrypt = require("bcrypt");

// // TODO ROUTE FUNCTIONS (NOT ACTIONS) GO HERE

// const getUser = async (req, res) => {
//     let user = await db.User.findOne({ username: req.params.username });
//     user = user._doc;
//     if (!user) {
//         return res.send(404);
//     }
//     if (req.query.withProjects) {
//         user.projects = await db.Project.find({ user: user });
//         res.send(user);
//     } else {
//         res.send(user);
//     }
// };


// const createUser = (req, res) => {
//     req.body.password = bcrypt.hashSync(
//         req.body.password,
//         bcrypt.genSaltSync(10)
//     );
//     db.User.create(req.body, (err, createdUser) => {
//         if (err) {
//             res.send(500, err);
//         } else if (!createdUser) {
//             res.send(400);
//         } else {
//             console.log("user is created", createdUser);
//             res.send(200, createUser);
//         }
//     });
// };


// const updateUser = (req, res) => {
//     if (req.body.password) {
//         req.body.password = bcrypt.hashSync(
//             req.body.password,
//             bcrypt.genSaltSync(10)
//         );
//     }
//     db.User.findByIdAndUpdate(req.session.currentUser._id, req.body, {
//         new: true,
//     }).then((updatedUser) => {
//         if (!updatedUser) {
//             res.status(400).json({ message: "Could not update profile." });
//         } else {
//             res.status(200).json({ Data: updatedUser });
//         }
//     });
// };

// const deleteUser = (req, res) => {
//     db.User.findByIdAndDelete(req.session.currentUser._id, (deletedUser) => {
//         if (!deletedUser) {
//             res.status(400).json({ message: "Could not delete user account." });
//         } else {
//             res.status(200).json({
//                 Data: deleteUser,
//                 message: "This account has been deleted",
//             });
//         }
//     });
// };

// module.exports = {
//     // TODO ROUTE NAMES GO HERE
//     getUser,
//     createUser,
//     updateUser,
//     deleteUser,
// };
