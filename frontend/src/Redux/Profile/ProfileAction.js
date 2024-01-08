import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileService } from './ProfileService';



//get profile
export const getProfile = createAsyncThunk("profile/getProfile",
async(thunkAPI)=>{
    try {
        return profileService.getProfile()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

//updateUserProfile
export const updateUserProfile = createAsyncThunk("profile/updateUserProfile",
async(userData,thunkAPI)=>{
    try {
        return profileService.updateUserProfile(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
