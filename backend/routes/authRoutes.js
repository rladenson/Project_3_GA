const express = require("express");
const { register, login, refreshToken } = require("../controllers/authCtrls"); //import register
const authRouter = express.Router();

authRouter.post("/signup", register);
authRouter.post("/signin", login);

authRouter.post("/refresh_token", refreshToken);

module.exports = authRouter;
