import { createSlice } from "@reduxjs/toolkit"
import { createProject, deleteProject, getProjects} from "./ProjectAction";
// import { DeleteData, EditData } from "./PostFunction";



const initialState = {
    projects:[],
    isError:false,
    isLoading:false,
    isProjectSuccess:true,
    message:""
}
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
            state.projects = action.payload.posts
            state.message= "Success"
       })
        .addCase(getProjects.rejected,(state,action)=>{
            console.log("err", action);
            state.isLoading=false;
            state.isError=true;
            state.isProjectSuccess=false;
            state.message='error'
        })
        

        //deletepost
    //     .addCase(deleteProject.pending,(state)=>{
    //         state.isLoading=true
    //     })
    //     .addCase(deleteProject.fulfilled,(state,action)=>{
    //         console.log(action);
    //         state.isLoading = false;
    //         state.isError=false;
    //         state.isProjectSuccess=true;
    //         state.projects = DeleteData(state.projects,action.payload.data.result._id)
    //         state.message= "Success"
    //    })
    //     .addCase(deleteProject.rejected,(state,action)=>{
    //         console.log("err", action);
    //         state.isLoading=false;
    //         state.isError=true;
    //         state.isProjectSuccess=false;
    //         state.message='error'
    //     })

    }
})

export default projectSlice.reducer