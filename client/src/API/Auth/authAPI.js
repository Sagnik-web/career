import { getAPI, postAPI } from "../methods"


export const registerAPI = async(val)=>{
    const res = await postAPI("","/auth/register",val)
    return res
}



export const loginAPI = async(val)=>{
    const res = await postAPI("","/auth/login",val)
    return res
}



export const getAllUsersAPI = async(token,val)=>{
    const res = await getAPI(token,"/auth/register",val)
    return res
}

export const getUserAPI = async(token)=>{
    const res = await getAPI(token,"/auth")
    return res
}