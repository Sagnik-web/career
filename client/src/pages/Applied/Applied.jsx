import React, { useEffect, useState } from 'react'
import AppliedApplication from '../../component/AppliedApplication/AppliedApplication'
import { getCandidateApplicationAPI } from '../../API/Application/applicationAPI'
import { CookieStorage } from 'cookie-storage';

function Applied() {

  const cookieStorage = new CookieStorage()
  const token = cookieStorage.getItem('token')
  const [applications,setApplications] = useState([])

  useEffect(()=>{
    getCandidateApplicationAPI(token)
    .then(res=>{
      // console.log(res.data);
      setApplications(res.data.applications)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  return (
    <div>
      {applications.map(el=>
        <AppliedApplication data={el} key={el._id}/>
      )}
      {/* <AppliedApplication/> */}
    </div>
  )
}

export default Applied