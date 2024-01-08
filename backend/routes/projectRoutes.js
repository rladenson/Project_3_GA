const projectRouter = require("express").Router();
const { createProject, getAllProjects, deleteProject, explore, editProject } = require('../controllers/projectCtrls')
const requireLogin = require('../middleware/requireLogin')

projectRouter.post("/createproject",requireLogin, createProject)
projectRouter.get("/allproject",requireLogin,getAllProjects)
projectRouter.get("/editproject",requireLogin,editProject)

//delete post
projectRouter.delete("/deleteproject/:projectId",requireLogin,deleteProject)

module.exports = projectRouter