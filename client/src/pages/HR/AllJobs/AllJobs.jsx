import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify';
import { CookieStorage } from 'cookie-storage';

import { deleteJobAPI, getAllJobsAPI } from '../../../API/Job/jobAPI';
import JobCard from '../../../component/JobCard/JobCard';
import { getJobs, removeJob } from '../../../Redux/Slice/jobsSlice';
import JobCardHR from '../../../component/JobCardHR/JobCardHR';
import Pagination from '../../../component/Pagination/Pagination';


function AllJobs() {
  const dispatch = useDispatch()
  const cookieStorage = new CookieStorage()
  const token = cookieStorage.getItem('token')

  const jobSelector = useSelector(state=>state.jobs.jobs)
  const currentPageSelector = useSelector(state=>state.jobs.currentPage)
  const totalJobsSelector = useSelector(state=>state.jobs.totalJobs)
  const totalPagesSelector = useSelector(state=>state.jobs.totalPages)
 // console.log(jobSelector);
  useEffect(()=>{

      getAllJobsAPI(token)
      .then(res=>{
         // console.log(res.data);
          dispatch(getJobs(res.data))
      })
      .catch(err=>{
         // console.log(err);
      })
  },[token])

  const onDelete =(ID)=>{
   // console.log(ID);
    deleteJobAPI(token,ID)
    .then(res=>{
     // console.log(res.data);
      toast.success("Job Post Deleted Successfully.")
      dispatch(removeJob(ID))
    })
    .catch(err=>{
     // console.log(err);
      toast.error("Job is not Deleted Yet.")

    })
    
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
   // console.log(page);

    getAllJobsAPI(token,page)
    .then(res=>{
       // console.log(res.data);
        dispatch(getJobs(res.data))
    })
    .catch(err=>{
       // console.log(err);
    })

  }


return (
  <div className=' max-w-[1200px] m-auto mt-7'>
      <h2></h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Title</th>
            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Description</th>
            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Created At</th>
            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Status</th>
            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
      {jobSelector.map(el=>
          <JobCardHR onDelete={onDelete}  data={el} key={el._id}/>

      )}
      </tbody>
      </table>

    <Pagination 
        currentPage={currentPage} 
        totalPages={totalPagesSelector} 
        onPageChange={handlePageChange} 
      />
  </div>
)
}

export default AllJobs