const router = require("express").Router();
const { sessionCtrl } = require("../controllers");

// TODO ROUTES GO HERE
router.post("/", sessionCtrl.makeSession);

module.exports = router;
