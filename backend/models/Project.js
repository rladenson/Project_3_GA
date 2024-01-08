const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: ObjectId, ref: "User" },
    repolink: { type: String },
    deployedlink: { type: String },
    techused: { type: [String] },
    tags: { type: [String] },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
