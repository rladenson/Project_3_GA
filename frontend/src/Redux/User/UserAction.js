import { UserService } from "./UserService"
import { createAsyncThunk } from "@reduxjs/toolkit";



//logout
export const logout = createAsyncThunk("user/logout",
async(thunkAPI)=>{
    try {
        return UserService.logout()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
