const express = require('express')
const { register, login,refreshToken} = require('../controllers/authCtrls')//import register
const authRouter = express.Router()


authRouter.post('/signup',register)
authRouter.post('/signin',login)


authRouter.post('/refresh_token',refreshToken)


module.exports = authRouter
// const router = require("express").Router();
// const { sessionCtrl } = require("../controllers");

// // TODO ROUTES GO HERE
// router.post("/", sessionCtrl.makeSession);

// module.exports = router;



