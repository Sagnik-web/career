import { createSlice} from "@reduxjs/toolkit"


const applicationSlice = createSlice({
    name:"all_application",
    initialState:{
        application: [],
        status: 'idle',
        currentPage:0,
        totalApplication:0, 
        totalPages:0,
        error: null
    },
    reducers:{
        getAllApplication:(state,actions)=>{
            state.application = actions.payload.applications
            state.currentPage = actions.payload.currentPage,
            state.totalApplication = actions.payload.totalApplications,
            state.totalPages = actions.payload.totalPages
            state.status = 'success'
        },
        statusUpdateAllApplication:(state, action)=>{
            // console.log(action.payload);
            state.application = state.application.map(el=> el._id == action.payload.application._id ? {...el, status:action.payload.application.status} :{...el}
            )
        },
        removeAllApplication: (state, action) => {
            state.application = state.application.filter(el => el._id !== action.payload);
          }
    }
})


export const {getAllApplication,removeAllApplication,statusUpdateAllApplication} = applicationSlice.actions

export default applicationSlice.reducer

