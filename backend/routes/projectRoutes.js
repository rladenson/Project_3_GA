const router = require("express").Router();
const { projectCtrl } = require("../controllers");
const { isAuthenticated } = require('../middleware/index')

// TODO ROUTES GO HERE
router.get('/', projectCtrl.getProjects);
router.get('/:id', projectCtrl.getProject);
router.post("/", isAuthenticated, projectCtrl.createProject);
router.put('/:id', isAuthenticated, projectCtrl.updateProject);
router.delete('/:id', isAuthenticated, projectCtrl.deleteProject);

module.exports = router;