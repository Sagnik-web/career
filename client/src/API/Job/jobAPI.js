import { deleteAPI, patchAPI, postAPI,getAPI } from "../methods"



export const postJobsAPI = async(token,val)=>{
    const res = await postAPI(token,"/job",val)
    return res
}



export const getAllJobsAPI = async(token,page=1,limit=5)=>{
    const res = await getAPI(token,`/job/all?page=${page}&&limit=${limit}`)
    return res
}


export const getSingleJobAPI = async(token,jobID)=>{
    const res = await getAPI(token,`/job/single/${jobID}`)
    return res
}



export const patchJobsAPI = async(token,val)=>{
    const res = await patchAPI(token,"/",val)
    return res
}


export const deleteJobAPI = async(token)=>{
    const res = await deleteAPI(token,"/")
    return res
}


