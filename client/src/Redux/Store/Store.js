import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../Slice/userSlice'
import jobsSlice from '../Slice/jobsSlice'
import allApplication from '../Slice/allApplication'
import jobApplication from '../Slice/jobApplication'



export const store = configureStore({
    reducer:{
        user:userSlice,
        jobs:jobsSlice,
        all_application:allApplication,
        job_application:jobApplication
    }
})

