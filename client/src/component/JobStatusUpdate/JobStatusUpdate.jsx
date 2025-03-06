import React, { useState } from 'react';
import { updateApplicationAPI } from '../../API/Application/applicationAPI';
import { CookieStorage } from 'cookie-storage';
import { useDispatch } from 'react-redux';
import {  statusUpdateJobApplication } from '../../Redux/Slice/jobApplication';
import { statusUpdateAllApplication } from '../../Redux/Slice/allApplication';
import { patchJobsAPI } from '../../API/Job/jobAPI';
import { statusUpdateJob } from '../../Redux/Slice/jobsSlice';

const JobStatusUpdate = ({id}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [status, setStatus] = useState('Select Status');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const cookieStorage = new CookieStorage()
  const dispatch = useDispatch()

  const handleStatusChange = async(newStatus) => {
    const token = await cookieStorage.getItem('token')

    // setStatus(newStatus);
    // editStatus(id,newStatus)
    setIsDropdownOpen(false); // Close dropdown when status is selected
    // setIsPopupOpen(true); // Open the status update popup

    console.log(newStatus);

    patchJobsAPI(token,id,{status:newStatus})
    .then(res=>{
      console.log(res.data);
      dispatch(statusUpdateJob(res.data))
    })
    .catch(err=>{
      console.log(err);
    })
    
  };



  return (
    <div className="relative inline-block">
      {/* Edit Button with Dropdown */}
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white px-4 py-1 rounded-sm mr-3"
      >
        Edit Status
      </button>

      {isDropdownOpen && (
        <div className="absolute bg-white z-20 shadow-lg rounded-lg w-48 mt-1 border">
          <ul className="list-none">
            <li
              onClick={() => handleStatusChange('Active')}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Active
            </li>
            <li
              onClick={() => handleStatusChange('Not Active')}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Not Active
            </li>
           
          </ul>
        </div>
      )}

     
    </div>
  );
};

export default JobStatusUpdate;
