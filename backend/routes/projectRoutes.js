const projectRouter = require("express").Router();
const { createProject, getAllProjects, deleteProject, explore } = require('../controllers/projectCtrls')
const requireLogin = require('../middleware/requireLogin');
const requireOwned = require("../middleware/requireOwned");

projectRouter.post("/createproject",requireLogin, createProject)
projectRouter.get("/allproject", getAllProjects)
projectRouter.delete("/deleteproject/:id", requireOwned, deleteProject)

module.exports = projectRouter