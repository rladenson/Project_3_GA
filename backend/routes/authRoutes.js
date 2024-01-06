const authRouter = require("express").Router();

authRouter.post('/signup', (req, res) => {})
authRouter.post('/signin', (req, res) => {})
authRouter.post('/refresh_token', (req, res) => {})
authRouter.post('/logout', (req, res) => {})

module.exports = authRouter;
// const router = require("express").Router();
// const { sessionCtrl } = require("../controllers");

// // TODO ROUTES GO HERE
// router.post("/", sessionCtrl.makeSession);

// module.exports = router;



