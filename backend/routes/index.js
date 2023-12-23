const router = require("express").Router();
const userRoute = require("./userRoutes");
const projectRoute = require("./projectRoutes");

router.use("/user", userRoute);
router.use("/project", projectRoute);

module.exports = router;