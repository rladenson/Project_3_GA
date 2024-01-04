const db = require("../models");

// TODO ROUTE FUNCTIONS (NOT ACTIONS) GO HERE
const getProjects = (req, res) => {
    db.Project.find({})
    .then((foundProjects) => {
        if(!foundProjects) {
            res.status(404).json({message: "Cannot find projects."})
        } else {
            res.status(200).json({data: foundProjects})
        }
    });
};

const getProject = (req, res) => {
    db.Project.findById(req.params.id)
    .then((foundProject) => {
        if(!foundProject) {
            res.status(404).json({message: "Cannot find project."})
        } else {
            res.status(200).json({data: foundProject})
        }
    })
}

const createProject = (req, res) => {
req.body.user = req.session.currentUser
db.Project.create(req.body, (err, createdProject) => {
    if (err) {
        res.send(500, err);
    } else if (!createdProject) {
        res.send(400);
    } else {
        console.log("Project Added", createdProject);
        res.send(200, createProject);
    }
});
};

const updateProject = async (req, res) => {
    const project = await db.Project.findById(req.params.id)
    if (project.user !== req.session.currentUser._id) {
        return res.status(403)
    }
    db.Project.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((updatedProject) => {
        if (!updatedProject) {
            res.status(500).json({ message: "Internal server error."});
        } else {
            res.status(200).json({ Data: updatedProject});
        }
    });
};

const deleteProject = async (req, res) => {
    const project = await db.Project.findById(req.params.id)
    if (project.user !== req.session.currentUser._id) {
        return res.status(403)
    }
    db.Project.findByIdAndDelete(req.params.id, (deletedProject) => {
        if (!deletedProject) {
            res.status(400).json({ message: "Could not delete project."});
        } else {
            res.status(200).json({
                Data: deleteProject,
                message: "Project has been removed from queue.",
            });
        }
    });
};

module.exports = {
    // TODO ROUTE NAMES GO HERE
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
};

