const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Project = require("../models/Project");

const requireOwned = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(400).json({ msg: "Invalid Authorization" });

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!decoded) return res.status(400).json({ msg: "Invalid Authorization" });

    const user = await User.findOne({ _id: decoded.id });

    const project = await Project.findById(req.params.id);
    if (project.createdBy.toString() !== decoded.id)
      return res.status(403).json({ msg: "Invalid Authorization" });

    next();
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Not Authorized token expired, try again" });
  }
};
module.exports = requireOwned;
