import { deleteAPI, getAPI, patchAPI, postAPI } from "../methods"


export const postApplicationAPI = async(token,val)=>{
    const res = await postAPI(token,"/",val)
    return res
}


export const getAllApplicationAPI = async(token,val)=>{
    const res = await getAPI(token,"/",val)
    return res
}


export const getSingleApplicationAPI = async(token,val)=>{
    const res = await getAPI(token,"/",val)
    return res
}


export const getCandidateApplicationAPI = async(token,val)=>{
    const res = await getAPI(token,"/",val)
    return res
}



export const getJobApplicationAPI = async(token,val)=>{
    const res = await getAPI(token,"/",val)
    return res
}


export const updateApplicationAPI = async(token,val)=>{
    const res = await patchAPI(token,"/",val)
    return res
}



export const deleteApplicationAPI = async(token)=>{
    const res = await deleteAPI(token,"/")
    return res
}