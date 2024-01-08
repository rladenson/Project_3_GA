const User = require("../models/User");
const bcrypt = require("bcryptjs");
const {
  createAccessToken,
  createRefreshToken,
} = require("../middleware/token"); //import
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      return res.status(422).json({ msg: "Please add all fields" });
    }
    //check if email has been used already
    const useremail = await User.findOne({ email });
    if (useremail)
      return res.status(400).json({
        msg: "This email is being used",
      });

    //hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 12);
    //create new user
    const user = new User({
      email,
      password: hashedPassword,
      name,
    });
    await user.save();

    res.json({ msg: "Registered Successfully" });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ msg: "Please add all fields" });
    }
    const user = await User.findOne({ email }); //find user
    if (!user) return res.status(400).json({ msg: "This user does not exist" });

    //match password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Password is Incorrect" });
    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });

    //add cookie
    res.cookie("refreshtoken", refresh_token, {
      httpOnly: true,
      path: "/api/refresh_token",
      maxAge: 30 * 24 * 60 * 60 * 1000, //30
    });

    res.json({
      msg: "Login Success",
      access_token,
      user: {
        ...user._doc,
        password: "",
      },
    });
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const refresh_token = req.cookies.refreshtoken;
    if (refresh_token) return res.status(400).json({ msg: "Please login now" });

    jwt.verify(
      refresh_token,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, result) => {
        if (err) return res.status(400).json({ msg: "Please login now" });

        //find user
        const user = await User.findById(result.id)
          .select("-password")
          .populate("_id name picture followers following");

        if (!user) res.status(400).json({ msg: "This user does not exists" });

        const access_token = createAccessToken({ id: result.id });

        res.json({
          access_token,
          user,
        });
      }
    );
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
};
