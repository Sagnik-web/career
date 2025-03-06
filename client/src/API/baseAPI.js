import axios from "axios";

const baseApi =(token)=>{

    const apiClient = axios.create({
        baseURL:"https://career-one-dun.vercel.app",//"http://localhost:5000",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      return apiClient
}


export default baseApi