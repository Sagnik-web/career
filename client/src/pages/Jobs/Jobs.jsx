import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllJobsAPI } from '../../API/Job/jobAPI'
import { CookieStorage } from 'cookie-storage';
import { getJobs } from '../../Redux/Slice/jobsSlice';
import JobCard from '../../component/JobCard/JobCard';
import { useHistory } from 'react-router-dom';


function Jobs() {
    const dispatch = useDispatch()
    const history = useHistory()
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

    const apply =(id)=>{
        history.push(`/application/${id}`)
    }

  return (
    <div>
        <h2></h2>
        {jobSelector.map(el=>
            <JobCard data={el} key={el._id} apply={()=>apply(el._id)}/>

        )}
    </div>
  )
}

export default Jobs