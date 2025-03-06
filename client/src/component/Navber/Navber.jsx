import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { CookieStorage } from 'cookie-storage';

function Navber() {

  const [isVisible,setIsVisble] = useState(false)
  const [isLoggedin,setIsLoggedin] = useState(false)
  const selector = useSelector(state=> state.user.status)
  const cookieStorage = new CookieStorage()
  console.log(selector);
  let token =cookieStorage.getItem('token')
  console.log(token);


  useEffect(()=>{
    if(selector == 'success'){
      setIsLoggedin(true)
    }


  },[selector])



  return (
    <nav className="bg-blue-500 p-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
   
      <Link to="/" className="text-white text-2xl font-bold">Brand</Link>

      <div className="space-x-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/hr/application/all" className="text-white">All Job Application</Link>
        <Link to="/hr" className="text-white">All HR Job</Link>
          <Link to="/hr/job_post" className="text-white">Job Post</Link>
          {/* <Link to="/hr/users" className="text-white">All Users</Link> */}
          <Link to="/applied" className="text-white">Applied</Link>
       
     {!isLoggedin &&<>
        <Link to="/login" className="text-white bg-transparent border-2 border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500 transition duration-300">Login</Link>
        <Link to="/register" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Signup</Link>
      </>}
      </div>

      {isLoggedin &&<>
      
      <div className="relative">
        <button className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" onClick={()=>setIsVisble(!isVisible)}>
          Username
        </button>

        <div className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md ${!isVisible && 'hidden'}`}>
          <ul className="text-gray-700">
          <li><Link to="/hr/application/all" className="block px-4 py-2">All Jobs</Link></li>
          <li><Link to="/hr/job_post" className="block px-4 py-2">Job Post</Link></li>
          {/* <li><Link to="/hr/users" className="block px-4 py-2">All Users</Link></li> */}
          <li><Link to="/applied" className="block px-4 py-2">Applied</Link></li>
          <li><button className="block px-4 py-2 cursor-pointer">Log Out</button></li>
          </ul>
        </div>
      </div>
      </>}

    </div>
  </nav>
  )
}

export default Navber
