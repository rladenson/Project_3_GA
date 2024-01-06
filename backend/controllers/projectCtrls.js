const Project = require("../models/Project")

exports.createProject = async(req,res)=>{
    const {name,description,pic} = req.body
    if(!name|| !description || !pic){
        return res.status(400).json({msg:"Please add all fields"})
    }
    req.user.password = undefined
    const post = new Post({
        name,
        description,
        image:pic,
        createdBy:req.user
    })
    post.save()
    .then(result=>{
        res.json({result,msg:"Created project successfully"})
    })
    .catch(err=>{
        return res.status(500).json({msg:err.message})
    })

}

exports.getAllProjects =async(req,res)=>{
    await Project.find({})
    .populate("createdBy","_id name")
    // .populate("createdBy","_id name pic")
    .sort("-createdAt")
    .then((posts)=>{
        res.status(200).json({project})
    })
    .catch(err=>{
        res.status(500).json({msg:err.message})
    })
}

// exports.deletePost = async(req,res)=>{
//     await Post.findByIdAndUpdate({_id:req.params.postId})
//     .populate("postedBy","_id")
//     .exec((err,post)=>{
//         if(err) return res.status(400).json({msg:err})

//         if(post.postedBy._id.toString() === req.user._id.toString()){
//             post.remove()
//             .then(result=>{
//                 res.json({msg:'Deleted post', result})
//             })
//             .catch(err=>{
//                 return res.status(500).json({msg:err.message})
//             })
//         }
//     })
// }

// exports.explore = async(req,res)=>{
//     try {
//         let explore = await Post.find({})
//         .populate("postedBy", "_id name pic")
//         .populate("comments.postedBy", "_id name pic")
    
//         res.json(explore)
        
//     } catch (error) {
//         return res.status(422).json({ msg: "Something went wrong." })
//     }
// }






// const db = require("../models");

// // TODO ROUTE FUNCTIONS (NOT ACTIONS) GO HERE
// const getProject = (req, res) => {
//     db.Project.find({})
//     .then((foundProject) => {
//         if(!foundProject) {
//             res.status(404).json({message: "Cannont find project."})
//         } else {
//             res.status(200).json({data: foundProject})
//         }
//     });
// };


// const createProject = (req, res) => {
// req.body.user = req.session.currentUser
// db.Project.create(req.body, (err, createdProject) => {
//     if (err) {
//         res.send(500, err);
//     } else if (!createdProject) {
//         res.send(400);
//     } else {
//         console.log("Project Added", createdProject);
//         res.send(200, createProject);
//     }
// });
// };

// const updateProject = async (req, res) => {
//     const project = await db.Project.findById(req.params.id)
//     if (project.user !== req.session.currentUser._id) {
//         return res.status(403)
//     }
//     db.Project.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((updatedProject) => {
//         if (!updatedProject) {
//             res.status(500).json({ message: "Internal server error."});
//         } else {
//             res.status(200).json({ Data: updatedProject});
//         }
//     });
// };

// const deleteProject = async (req, res) => {
//     const project = await db.Project.findById(req.params.id)
//     if (project.user !== req.session.currentUser._id) {
//         return res.status(403)
//     }
//     db.Project.findByIdAndDelete(req.params.id, (deletedProject) => {
//         if (!deletedProject) {
//             res.status(400).json({ message: "Could not delete project."});
//         } else {
//             res.status(200).json({
//                 Data: deleteProject,
//                 message: "Project has been removed from queue.",
//             });
//         }
//     });
// };

// module.exports = {
//     // TODO ROUTE NAMES GO HERE
//     getProject,
//     createProject,
//     updateProject,
//     deleteProject,
// };

