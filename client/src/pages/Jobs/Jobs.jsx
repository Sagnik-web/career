import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllActiveJobsAPI, getAllJobsAPI } from '../../API/Job/jobAPI'
import { CookieStorage } from 'cookie-storage';
import { getJobs } from '../../Redux/Slice/jobsSlice';
import JobCard from '../../component/JobCard/JobCard';
import { useHistory } from 'react-router-dom';
import Pagination from '../../component/Pagination/Pagination';
// import { getAllActiiveJobs } from '../../../../Controller/job.controller';


function Jobs() {
    const dispatch = useDispatch()
    const history = useHistory()
    const cookieStorage = new CookieStorage()
    const token = cookieStorage.getItem('token')

    const jobSelector = useSelector(state=>state.jobs?.jobs)
    const currentPageSelector = useSelector(state=>state.jobs?.currentPage)
    const totalJobsSelector = useSelector(state=>state.jobs?.totalJobs)
    const totalPagesSelector = useSelector(state=>state.jobs?.totalPages)
   
    const userAppliedSelector = useSelector(state=>state.user.user?.applied)
    const userRoleSelector = useSelector(state=>state.user.user?.role)
    const userStatusSelector = useSelector(state=>state.user?.status)
    // // console.log(userSelector);
    // console.log(jobSelector);
    useEffect(()=>{

        getAllActiveJobsAPI("")
        .then(res=>{
            // console.log(res.data);
            dispatch(getJobs(res.data))
        })
        .catch(err=>{
            // console.log(err);
        })
    },[token])

    const apply =(id)=>{
        if(userStatusSelector == 'success'){
        history.push(`/application/${id}`)

        }else{
            history.push('/login')
        }
    }

    const [currentPage, setCurrentPage] = useState(1);
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // console.log(page);
    getAllActiveJobsAPI("",page)
        .then(res=>{
            // console.log(res.data);
            dispatch(getJobs(res.data))
        })
        .catch(err=>{
            // console.log(err);
        })
  };

  return (
    <div>
        <h2></h2>
        {jobSelector?.map(el=>
            <JobCard userRoleSelector={userRoleSelector} userAppliedSelector={userAppliedSelector} data={el} key={el._id} apply={()=>apply(el._id)}/>
        )}

    <Pagination 
        currentPage={currentPage} 
        totalPages={totalPagesSelector} 
        onPageChange={handlePageChange} 
      />
    </div>
  )
}

export default Jobs