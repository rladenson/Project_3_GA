const userRouter = require("express").Router();
const { logout, getMyPosts, getMySavedPosts, updateProfile, followUser, unfollowUser, getUserDetails, suggestionUser, searchUser, addStory, getStory } = require('../controllers/userCtrls')
const requireLogin = require('../middleware/requireLogin')

userRouter.get('/logout',requireLogin,logout)
// userRouter.get('/mypost',requireLogin,getMyPosts)
// userRouter.get('/mySavedPosts',requireLogin,getMySavedPosts)
// userRouter.put('/updateProfile',requireLogin,updateProfile)
// userRouter.put('/follow',requireLogin,followUser)
// userRouter.put('/unfollow',requireLogin,unfollowUser)

// userRouter.get('/user/:id',requireLogin,getUserDetails)

// userRouter.get('/suggestionUser',requireLogin,suggestionUser)

//manage user search
// userRouter.post('/search-user',requireLogin,searchUser)

// //creating stories
// userRouter.post('/addStory',requireLogin,addStory)
// //view story
// userRouter.get('/getStory',requireLogin,getStory)


module.exports = userRouter



// const router = require("express").Router();
// const { userCtrl } = require("../controllers");
// const { isAuthenticated } = require("../middleware/index");

// // TODO ROUTES GO HERE
// router.get("/:username", userCtrl.getUser);
// router.post("/", userCtrl.createUser);
// router.patch("/", isAuthenticated, userCtrl.updateUser);
// router.delete("/", isAuthenticated, userCtrl.deleteUser);

// module.exports = router;
