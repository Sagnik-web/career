import React, { useState } from 'react';
import { updateApplicationAPI } from '../../API/Application/applicationAPI';
import { CookieStorage } from 'cookie-storage';
import { useDispatch } from 'react-redux';
import {  statusUpdateJobApplication } from '../../Redux/Slice/jobApplication';
import { statusUpdateAllApplication } from '../../Redux/Slice/allApplication';

const StatusUpdatePopup = ({id}) => {
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
    updateApplicationAPI(token,id,{status:newStatus})
    .then(res=>{
        console.log(res.data);
        dispatch(statusUpdateAllApplication(res.data))
        dispatch(statusUpdateJobApplication(res.data))
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
              onClick={() => handleStatusChange('Applied')}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Applied
            </li>
            <li
              onClick={() => handleStatusChange('Viewed')}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Viewed
            </li>
            <li
              onClick={() => handleStatusChange('Selected')}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Selected
            </li>
            <li
              onClick={() => handleStatusChange('Not Selected')}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Not Selected
            </li>
          </ul>
        </div>
      )}

     
    </div>
  );
};

export default StatusUpdatePopup;
