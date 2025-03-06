import { createSlice} from "@reduxjs/toolkit"


const jobsSlice = createSlice({
    name:"jobs",
    initialState:{
        jobs: [],
        status: 'idle',
        currentPage:0,
        totalJobs:0, 
        totalPages:0,
        error: null
    },
    reducers:{
        getJobs:(state,actions)=>{
            state.jobs = actions.payload.jobs
            state.currentPage = actions.payload.currentPage,
            state.totalJobs = actions.payload.totalJobs,
            state.totalPages = actions.payload.totalPages
            state.status = 'success'
        },
        removeJob: (state, action) => {
            state.jobs = state.jobs.filter(el => el._id !== action.payload);
          }
    }
})


export const {getJobs,removeJob} = jobsSlice.actions

export default jobsSlice.reducer

