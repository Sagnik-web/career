import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getSingleJobAPI } from '../../API/Job/jobAPI';
import { postApplicationAPI } from '../../API/Application/applicationAPI';
import { CookieStorage } from 'cookie-storage';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


function ApplicationForm() {
    const cookieStorage = new CookieStorage()
    const history = useHistory()
    const { applicationID } = useParams();
    const [job,setJob] = useState({})
    const [formData, setFormData] = useState({
        desc: "",
        file: null,
      });
    
      // Handle form input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Handle file input change
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
          ...formData,
          file: file,
        });
      };
    
      // Handle form submission
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(applicationID);
        const token = await cookieStorage.getItem('token')
        const formDataToSubmit = new FormData();
        formDataToSubmit.append("desc", formData.desc);
        // formDataToSubmit.append("job", applicationID);
        formDataToSubmit.append("file", formData.file);
    
        // You can now send the formDataToSubmit to a backend API
        console.log("Form Data:", formDataToSubmit);

        postApplicationAPI(token,applicationID,formData)
        .then(res=>{
            console.log(res.data);
            toast.success('Application Submitted Successfully')
            history.push('/applied')
        })
        .catch(err=>{
            console.log(err);
            toast.error('Application is not submitted')

        })
    
      };
    

      useEffect(()=>{
        getSingleJobAPI("",applicationID)
        .then(res=>{
            console.log(res.data.job);
            setJob(res.data.job)
        })
        .catch(err=>{
            console.log(err);
        })
      },[applicationID])


  return (
    <div className="max-w-lg m-auto mt-7">

<div className="max-w-sm rounded overflow-hidden p-6 bg-white mb-7">
      <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
      <p className="text-gray-600 mt-2">{job.description}</p>
      <div className="flex items-center justify-between my-4">
        <span className="text-sm text-gray-500">{new Date(job.createdAt).toLocaleDateString()}</span>
      </div>
      <span className={`${job.status == 'active' ? 'bg-green-200': 'bg-red-200'} px-4 py-1 rounded-2xl`} >{job.status}</span>

    </div>
    {/* <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"> */}
      {/* <h2 className="text-2xl font-bold text-center mb-6">Application Form</h2> */}

      {/* Form */}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Cover Letter</label>
          <textarea
            type="text"
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>


       

        {/* File Upload */}
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Document</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    {/* </div> */}
  </div>
  )
}

export default ApplicationForm