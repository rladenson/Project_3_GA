const projectRouter = require("express").Router();
const { createProject, getAllProjects, deleteProject } = require('../controllers/projectCtrls')
const requireLogin = require('../middleware/requireLogin')

projectRouter.post("/createproject",requireLogin, createProject)
projectRouter.get("/allproject",requireLogin,getAllProjects)

//delete post
// projectRouter.delete("/deleteproject/:projectId",requireLogin,deleteProject)

module.exports = projectRouter