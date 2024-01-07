const Project = require("../models/Project")


exports.createProject = async(req,res)=>{
    const {name,description,pic,repolink,deployedlink,techused,tags} = req.body
    if(!name|| !description || !pic){
        return res.status(400).json({msg:"Please add all fields"})
    }

    req.user.password = undefined
    const project = new Project({
        name,
        description,
        image:pic,
        repolink,
        deployedlink,
        techused,
        tags,
        createdBy:req.user
    })
    project.save()
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
    .then((projects)=>{
        res.status(200).json({projects})
    })
    .catch(err=>{
        res.status(500).json({msg:err.message})
    })
}

exports.deletePost = async(req,res)=>{
    await Project.findByIdAndUpdate({_id:req.params.projectId})
    .populate("createdBy","_id")
    .exec((err,project)=>{
        if(err) return res.status(400).json({msg:err})

        if(project.createdBy._id.toString() === req.user._id.toString()){
            project.remove()
            .then(result=>{
                res.json({msg:'Deleted project', result})
            })
            .catch(err=>{
                return res.status(500).json({msg:err.message})
            })
        }
    })
}


