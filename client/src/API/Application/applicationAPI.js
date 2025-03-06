import { deleteAPI, formDataPostAPI, getAPI, patchAPI, postAPI } from "../methods"


export const postApplicationAPI = async(token,jobID,val)=>{
    const res = await formDataPostAPI(token,`/application/${jobID}`,val)
    return res
}


export const getAllApplicationAPI = async(token)=>{
    const res = await getAPI(token,"/application/all")
    return res
}


export const getSingleApplicationAPI = async(token,applicationID,val)=>{
    const res = await getAPI(token,`/application/single/${applicationID}`,val)
    return res
}


export const getCandidateApplicationAPI = async(token)=>{
    const res = await getAPI(token,"/application/candidate")
    return res
}



export const getJobApplicationAPI = async(token,jobID)=>{
    const res = await getAPI(token,`/application/job/${jobID}`)
    return res
}


export const updateApplicationAPI = async(token,applicationId,val)=>{
    const res = await patchAPI(token,`/application/${applicationId}`,val)
    return res
}



export const deleteApplicationAPI = async(token,applicationId)=>{
    const res = await deleteAPI(token,`/application/${applicationId}`)
    return res
}