import { createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name:"user",
    initialState:{
        user: {},
        status: 'idle',
        error: null
    },
    reducers:{
        getUser:(state,actions)=>{
            state.user = actions.payload
            state.status = 'success'
        },
        logoutUser:(state,actions)=>{
            state.user = {}
            state.status = 'logout'
        }
    }
})


export const {getUser,logoutUser} = userSlice.actions

export default userSlice.reducer

