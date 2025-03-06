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
        statusUpdateJob:(state, action)=>{
            // console.log(action.payload);
            state.jobs = state.jobs.map(el=> el._id == action.payload.job._id ? {...el, status:action.payload.job.status} :{...el}
            )
        },
        removeJob: (state, action) => {
            state.jobs = state.jobs.filter(el => el._id !== action.payload);
          }
    }
})


export const {getJobs,removeJob, statusUpdateJob} = jobsSlice.actions

export default jobsSlice.reducer

