import React, { useEffect, useState } from 'react'
import { getJobApplicationAPI } from '../../../API/Application/applicationAPI'
import { CookieStorage } from 'cookie-storage';
import { useParams } from 'react-router-dom'
import ApplicationCardRow from '../../../component/ApplicationCardRow/ApplicationCardRow';
import {useDispatch,useSelector} from "react-redux"
import { getJobApplication, removeJobApplication } from '../../../Redux/Slice/jobApplication';
import { toast } from 'react-toastify';
import Pagination from '../../../component/Pagination/Pagination';


function JobApplications() {

  const dispatch = useDispatch()
  const cookieStorage = new CookieStorage()
  const token = cookieStorage.getItem('token')
  const {jobID} = useParams()


  const applicationSelector = useSelector(state=>state.job_application.application)
  const currentPageSelector = useSelector(state=>state.job_application.currentPage)
  const totalApplicationSelector = useSelector(state=>state.job_application.totalApplication)
  const totalPagesSelector = useSelector(state=>state.job_application.totalPages)
 // console.log(applicationSelector,currentPageSelector,totalApplicationSelector,totalPagesSelector);


  useEffect(()=>{
    getJobApplicationAPI(token,jobID)
    .then(res=>{
     // console.log(res.data);
      dispatch(getJobApplication(res.data))
    })
    .catch(err=>{
     // console.log(err);
    })
  },[])

   const deleteApplication=(ID)=>{
    deleteApplicationAPI(token,ID)
    .then(res=>{
     // console.log(res.data);
      removeJobApplication(ID)
      toast.success("Application Deleted Successfully.")

    })
    .catch(err=>{
     // console.log(err);
    })
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
   // console.log(page);

    getJobApplicationAPI(token,jobID,page)
    .then(res=>{
     // console.log(res.data);
      dispatch(getJobApplication(res.data))
    })
    .catch(err=>{
     // console.log(err);
    })

  }


  return (
    <div>
      <div>
       <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left">Email</th>
            <th className="py-2 px-4 border-b text-left">Job Title</th>
            <th className="py-2 px-4 border-b text-left">Time</th>
            <th className="py-2 px-4 border-b text-left">Resume</th>
            <th className="py-2 px-4 border-b text-left">Status</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicationSelector.map(el=>
            <ApplicationCardRow row={el} deleteApplication={()=>deleteApplication(el._id)} editStatus={()=>editStatus(el.id)} key={el._id}/>
          )}
        </tbody>
        </table>
    </div>
    <Pagination 
        currentPage={currentPage} 
        totalPages={totalPagesSelector} 
        onPageChange={handlePageChange} 
      />
    </div>
  )
}

export default JobApplications