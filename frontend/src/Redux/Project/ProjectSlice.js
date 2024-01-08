import { createSlice } from "@reduxjs/toolkit"
import { createProject, getProjects, updateProject, deleteProject} from "./ProjectAction";
// import { DeleteData, EditData } from "./ProjectFunction";

  

const initialState = {
    projects:[],
    isError:false,
    isLoading:false,
    isProjectSuccess:true,
    isDeleteSuccess: false,
    message:""
}

const EditData = (projects, projectId, newData) => {
    return projects.map((project) =>
      project._id === projectId ? { ...project, ...newData } : project
    );
  };
  
export const projectSlice = createSlice({
    name:"project",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createProject.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createProject.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError=false;
            state.isProjectSuccess=true;
            state.projects = action.payload.result
            state.message= action.payload.msg
       })
        .addCase(createProject.rejected,(state,action)=>{
            console.log("err", action);
            state.isLoading=false;
            state.isError=true;
            state.isProjectSuccess=false;
            state.message='error'
        })
        //getprojects
        .addCase(getProjects.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getProjects.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError=false;
            state.isProjectSuccess=true;
            state.projects = action.payload.projects
            state.message= "Success"
       })
        .addCase(getProjects.rejected,(state,action)=>{
            console.log("err", action);
            state.isLoading=false;
            state.isError=true;
            state.isProjectSuccess=false;
            state.message='error'
        })
        
        //updateproject
//      .addCase(updateProject.pending,(state)=>{
//         state.isLoading=true
//     })
//     .addCase(updateProject.fulfilled,(state,action)=>{
//         console.log("action",action);
//         state.isLoading = false;
//         state.isError=false;
//         state.isSuccess=true;
//         state.projects = EditData(state.projects,action.payload.result._id,action.payload.result)
//         //action.payload.result
//         state.message= action.payload.msg
//    })
//     .addCase(updateProject.rejected,(state,action)=>{
 
//         state.isLoading=false;
//         state.isError=true;
//         state.isSuccess=false;
//         state.message='error'
//     })

// updateproject
.addCase(updateProject.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(updateProject.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isError = false;
    state.isSuccess = true;
    const updatedProject = action.payload; // Assuming your API returns the updated project data directly
    // state.projects = EditData(state.projects, updatedProject._id, updatedProject);
    state.projects = state.projects.map((project) =>
    project._id === updatedProject._id ? updatedProject : project
  );
    state.message = 'Project updated successfully.';
  })
  .addCase(updateProject.rejected, (state) => {
    state.isLoading = false;
    state.isError = true;
    state.isSuccess = false;
    state.message = 'Failed to update project.';
  })

        //deletepost
        .addCase(deleteProject.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(deleteProject.fulfilled,(state,action)=>{
            console.log(action);
            state.isLoading = false;
            state.isError=false;
            state.isDeleteSuccess=true;
            // state.projects = DeleteData(state.projects,action.payload.data.result._id)
            state.message= "Success"
       })
        .addCase(deleteProject.rejected,(state,action)=>{
            console.log("err", action);
            state.isLoading=false;
            state.isError=true;
            state.isDeleteSuccess=false;
            state.message='error'
        })

    }
})

export default projectSlice.reducer