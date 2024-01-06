const router = require("express").Router();
const userRoute = require("./userRoutes");
const projectRoute = require("./projectRoutes");
const sessionRoute = require("./authRoutes");

router.use("/user", userRoute);
router.use("/project", projectRoute);
router.use("/session", sessionRoute);

module.exports = router;
