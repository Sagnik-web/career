import { deleteAPI, patchAPI } from "../methods"



export const postJobsAPI = async(val)=>{
    const res = await postAPI("","/",val)
    return res
}



export const getAllJobsAPI = async(token,val)=>{
    const res = await getAPI(token,"/",val)
    return res
}


export const getSingleJobAPI = async(token,val)=>{
    const res = await getAPI(token,"/",val)
    return res
}



export const patchJobsAPI = async(val)=>{
    const res = await patchAPI("","/",val)
    return res
}


export const deleteJobAPI = async(val)=>{
    const res = await deleteAPI("","/")
    return res
}


