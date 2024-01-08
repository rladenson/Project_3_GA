import { ProjectService } from "./ProjectService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProject = createAsyncThunk(
  "project/createproject",
  async (projectdata, thunkAPI) => {
    try {
      return ProjectService.createProject(projectdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//getProjects
export const getProjects = createAsyncThunk(
  "project/getProjects",
  async (thunkAPI) => {
    try {
      return ProjectService.getProjects();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//updateProject
export const updateProject = createAsyncThunk(
  "project/updateProject",
  async (projectData, thunkAPI) => {
    try {
      return ProjectService.updateProject(projectData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//deleteProject
export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (projectId, thunkAPI) => {
    try {
      return ProjectService.deleteProject(projectId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
