import baseApi from "./baseAPI"

export const postAPI =async(token,url,data)=>{
    const res =await baseApi(token).post(url,data)
    return res
}


export const getAPI =async(token,url)=>{
    const res =await baseApi(token).get(url)
    return res
}


export const patchAPI =async(token,url,data)=>{
    const res =await baseApi(token).patch(url,data)
    return res
}

// export const putAPI =async(token,url,data)=>{
//     const res =await baseApi(token).put(url,data)
//     return res
// }

export const deleteAPI =async(token,url)=>{
    const res =await baseApi(token).delete(url)
    return res
}


