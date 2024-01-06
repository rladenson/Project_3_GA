const projectRouter = require("express").Router();
const { createProject, getAllProjects, deleteProject, explore } = require('../controllers/projectCtrls')
const requireLogin = require('../middleware/requireLogin')

projectRouter.post("/createproject",requireLogin,createProject)
projectRouter.get("/allproject",requireLogin,getAllProjects)

// postRouter.put('/like',requireLogin,likePost)
// postRouter.put('/unlike',requireLogin,unlikePost)

// postRouter.put('/saved',requireLogin, savePost)
// postRouter.put('/unsaved',requireLogin, unSavePost)

//comments route

// postRouter.put('/createComment',requireLogin,addComment)
// postRouter.get('/allcomments',requireLogin,getAllComments)
// postRouter.put('/deleteComment',requireLogin,deleteComment)

//delete post
// projectRouter.delete("/deleteproject/:projectId",requireLogin,deleteProject)

// projectRouter.get('/explore',requireLogin,explore)

module.exports = projectRouter


// const router = require("express").Router();
// const { projectCtrl } = require("../controllers");
// const { isAuthenticated } = require('../middleware/index')

// // TODO ROUTES GO HERE
// router.get('/', projectCtrl.getProject);
// router.post("/", isAuthenticated, projectCtrl.createProject);
// router.put('/:id', isAuthenticated, projectCtrl.updateProject);
// router.delete('/:id', isAuthenticated, projectCtrl.deleteProject);

// module.exports = router;