const projectRouter = require("express").Router();
const { createProject, getAllProjects, deleteProject, updateProject } = require('../controllers/projectCtrls')
const requireLogin = require('../middleware/requireLogin')

projectRouter.post("/createproject",requireLogin, createProject)
projectRouter.get("/allproject",requireLogin,getAllProjects)
projectRouter.put('/updateProject/:projectid',updateProject)
//delete post
// projectRouter.delete("/deleteproject/:projectId",requireLogin,deleteProject)

module.exports = projectRouter