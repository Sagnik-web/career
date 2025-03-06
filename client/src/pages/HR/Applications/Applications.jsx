import React,{useEffect, useState} from 'react'
import { CookieStorage } from 'cookie-storage';
import { deleteApplicationAPI, getAllApplicationAPI } from '../../../API/Application/applicationAPI';
import ApplicationCardRow from '../../../component/ApplicationCardRow/ApplicationCardRow';
import {useDispatch, useSelector} from 'react-redux'
import { getAllApplication, removeAllApplication } from '../../../Redux/Slice/allApplication';
import StatusUpdatePopup from '../../../component/StatusUpdate/StatusUpdate';
import { toast } from 'react-toastify';
import Pagination from '../../../component/Pagination/Pagination';


function Applications() {

  const cookieStorage = new CookieStorage()
  const token = cookieStorage.getItem('token')

  const dispatch = useDispatch()
  const applicationSelector = useSelector(state=>state.all_application.application)
  const currentPageSelector = useSelector(state=>state.all_application.currentPage)
  const totalApplicationSelector = useSelector(state=>state.all_application.totalApplication)
  const totalPagesSelector = useSelector(state=>state.all_application.totalPages)
  console.log(applicationSelector,currentPageSelector,totalApplicationSelector,totalPagesSelector);


  useEffect(()=>{
    getAllApplicationAPI(token)
    .then(res=>{
      // console.log(res.data);
      dispatch(getAllApplication(res.data))
    })
    .catch(err=>{
      console.log(err);
    })
  },[])


  const deleteApplication=(ID)=>{
    deleteApplicationAPI(token,ID)
    .then(res=>{
      console.log(res.data);
      dispatch(removeAllApplication(ID))
      toast.success("Application Deleted Successfully.")
      
    })
    .catch(err=>{
      console.log(err);
    })
  }


  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(page);

    getAllApplicationAPI(token,page)
    .then(res=>{
      // console.log(res.data);
      dispatch(getAllApplication(res.data))
    })
    .catch(err=>{
      console.log(err);
    })
  }  


  return (
    <div className='mt-7'>
       <table className="m-auto max-w-[1200px] bg-white border border-gray-300">
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
            {/* <ApplicationCardRow/> */}
            {applicationSelector.map(el=>
            <ApplicationCardRow row={el} deleteApplication={()=>deleteApplication(el._id)} key={el._id}/>
          )}
        </tbody>
        </table>

        <Pagination
        currentPage={currentPage} 
        totalPages={totalPagesSelector} 
        onPageChange={handlePageChange} 
      />
        {/* <StatusUpdatePopup/> */}
    </div>
  )
}

export default Applications