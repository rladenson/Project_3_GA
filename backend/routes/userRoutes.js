const userRouter = require("express").Router();
const { logout, getMyProjects, updateProfile, followUser, unfollowUser, getUserDetails,  searchUser} = require('../controllers/userCtrls')
const requireLogin = require('../middleware/requireLogin')

userRouter.get('/logout',requireLogin,logout)
userRouter.get('/myproject',requireLogin,getMyProjects)
userRouter.put('/updateProfile',requireLogin,updateProfile)
userRouter.put('/follow',requireLogin,followUser)
userRouter.put('/unfollow',requireLogin,unfollowUser)

userRouter.get('/user/:id',requireLogin,getUserDetails)


//manage user search
// userRouter.post('/search-user',requireLogin,searchUser)




module.exports = userRouter

