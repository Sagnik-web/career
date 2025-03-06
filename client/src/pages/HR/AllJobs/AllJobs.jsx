import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { CookieStorage } from 'cookie-storage';

import { getAllJobsAPI } from '../../../API/Job/jobAPI';
import JobCard from '../../../component/JobCard/JobCard';
import { getJobs } from '../../../Redux/Slice/jobsSlice';
import JobCardHR from '../../../component/JobCardHR/JobCardHR';


function AllJobs() {
  const dispatch = useDispatch()
  const cookieStorage = new CookieStorage()
  const token = cookieStorage.getItem('token')

  const jobSelector = useSelector(state=>state.jobs.jobs)
  const currentPageSelector = useSelector(state=>state.jobs.currentPage)
  const totalJobsSelector = useSelector(state=>state.jobs.totalJobs)
  const totalPagesSelector = useSelector(state=>state.jobs.totalPages)
  console.log(jobSelector);
  useEffect(()=>{

      getAllJobsAPI("")
      .then(res=>{
          console.log(res.data);
          dispatch(getJobs(res.data))
      })
      .catch(err=>{
          console.log(err);
      })
  },[token])

return (
  <div className=' max-w-[1200px] m-auto mt-7'>
      <h2></h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Title</th>
            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Description</th>
            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Created At</th>
            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
      {jobSelector.map(el=>
          <JobCardHR data={el} key={el._id}/>

      )}
      </tbody>
      </table>
  </div>
)
}

export default AllJobs