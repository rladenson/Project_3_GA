const projectRouter = require("express").Router();
const {
  createProject,
  getAllProjects,
  deleteProject,
  explore,
  editProject,
} = require("../controllers/projectCtrls");
const requireLogin = require("../middleware/requireLogin");
const requireOwned = require("../middleware/requireOwned");

projectRouter.post("/createproject", requireLogin, createProject);
projectRouter.get("/allproject", getAllProjects);
projectRouter.delete("/deleteproject/:id", requireOwned, deleteProject);
projectRouter.put("/editProject/:id", requireOwned, editProject);

module.exports = projectRouter;
