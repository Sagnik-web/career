import axios from "axios";


const baseFormDataApi =(token)=>{

    const apiClient = axios.create({
        baseURL:"",// "http://localhost:5000",
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      return apiClient
  }
//   ,{headers: {
//     'Content-Type': 'multipart/form-data', // Make sure to set the correct content type
//   }}
  export default baseFormDataApi