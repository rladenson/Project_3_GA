const Project = require("../models/Project");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports.logout = async (req, res) => {
  try {
    res.clearCookie("refreshtoken", { path: "/api/refresh_token" });
    return res.json({ msg: "Logout Successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getMyProjects = async (req, res) => {
  Project.find({ createdBy: req.user._id })
    .populate("createdBy", "_id name")
    .then((myproject) => {
      res.json({ myproject: myproject });
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
};

exports.updateProfile = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  await User.findOneAndUpdate(
    { _id: req.user._id },
    {
      name,
      email,
      password: hashedPassword,
    },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    } else {
      res.json({ msg: "Update Success", result: result });
    }
  });
};

exports.followUser = async (req, res) => {
  console.log(req.body.followId);
  const followersUpdate = await User.findOneAndUpdate(
    { _id: req.body.followId },
    {
      $push: { followers: req.user._id },
    },
    {
      new: true,
    }
  ).then((result) => {
    return result;
  });

  if (followersUpdate) {
    await User.findOneAndUpdate(
      req.user._id,
      {
        $push: { following: req.body.followId },
      },
      { new: true }
    )
      .select("-password")
      .exec((err, result) => {
        if (err) {
          res.status(400).json({ msg: err.message });
        }
        console.log(result);
        res.json(result);
      });
  }
};

exports.unfollowUser = async (req, res) => {
  console.log(req.body.unfollowId);

  const followingUpdate = await User.findOneAndUpdate(
    { _id: req.body.unfollowId },
    {
      $pull: { followers: req.user._id },
    },
    {
      new: true,
    }
  ).then((result) => {
    return result;
  });

  if (followingUpdate) {
    await User.findOneAndUpdate(
      req.user._id,
      {
        $pull: { following: req.body.unfollowId },
      },
      { new: true }
    )
      .select("-password")
      .exec((err, result) => {
        if (err) {
          res.status(400).json({ msg: err.message });
        }
        console.log(result);
        res.json(result);
      });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    await User.findOne({ _id: req.params.id })
      .select("-password")
      .then((user) => {
        if (!user) return res.status(400).json({ msg: "User does not exist" });

        Project.find({ createdBy: req.params._id })
          .populate("createdBy", "_id name")
          .exec((err, projects) => {
            if (!projects) {
              return res.status(400).json({ msg: "Post does not exist" });
            }
            res.json({ user, projects });
          });
      });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.searchUser = (req, res) => {
  let userPattern = new RegExp("^" + req.body.query);

  User.find({ name: { $regex: userPattern } })
    .select("_id name email pic")
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      return res.status(500).json({ msg: err.message });
    });
};
