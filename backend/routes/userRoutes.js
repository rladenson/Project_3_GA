const router = require("express").Router();
const { userCtrl } = require("../controllers");

// TODO ROUTES GO HERE
router.post("/", userCtrl.createUser);
router.patch("/:username", userCtrl.updateUser);
router.delete("/:username", userCtrl.deleteUser);

module.exports = router;
