import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { CookieStorage } from 'cookie-storage';
import { getUserAPI } from '../../API/Auth/authAPI';
import { toast } from 'react-toastify';
import { getUser, logoutUser } from '../../Redux/Slice/userSlice';
// import {} from 'react-router-dom'

function Navber() {

  const [isVisible,setIsVisble] = useState(false)
  const [isLoggedin,setIsLoggedin] = useState(false)
  const selector = useSelector(state=> state.user.status)
  const userRole = useSelector(state=> state.user.user.role)
  const dispatch = useDispatch()

  // console.log(userRole);
  const cookieStorage = new CookieStorage()
  // console.log(selector);
  let token =cookieStorage.getItem('token')
  // console.log(token);

  const history = useHistory()

  useEffect(()=>{
    if(selector == 'success'){
      setIsLoggedin(true)
    }


  },[selector])

  useEffect(()=>{
    if(token){
    getUserAPI(token)
    .then(res=>{
      // console.log(res.data);
      dispatch(getUser(res.data.user))
    })
    .catch(err=>{
      console.log(err);
    })
  }
  },[token])

  const logout =async()=>{
    await cookieStorage.removeItem('token')
    await dispatch(logoutUser())
    setIsLoggedin(false)
    toast.success('Logout Successfully')
    history.push('/')
  }


  return (
    <nav className="bg-blue-500 p-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
   
      <Link to="/" className="text-white text-2xl font-bold">Brand</Link>

      <div className="space-x-4">
        <Link to="/" className="text-white">Home</Link>
        {userRole == 'hr'&&<>
        <Link to="/hr/application/all" className="text-white">All Job Application</Link>
        <Link to="/hr" className="text-white">All HR Job</Link>
          <Link to="/hr/job_post" className="text-white">Job Post</Link>
          {/* <Link to="/hr/users" className="text-white">All Users</Link> */}
          </>}
          {userRole == 'user' &&<Link to="/applied" className="text-white">Applied</Link>}
       
     {!isLoggedin &&<>
        <Link to="/login" className="text-white bg-transparent border-2 border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500 transition duration-300">Login</Link>
        <Link to="/register" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Signup</Link>
      </>}
      </div>

      {isLoggedin &&<>
      
      <div className="relative">
        <button className="text-white bg-blue-800 hover:bg-blue-900 cursor-pointer px-4 py-2 rounded-md" onClick={()=>setIsVisble(!isVisible)}>
          User
        </button>

        <div className={`absolute z-30 right-0 mt-2 w-48 bg-white shadow-lg rounded-md ${!isVisible && 'hidden'}`}>
          <ul className="text-gray-700">
        {userRole == 'hr'&&<>

          <li><Link to="/hr/application/all" className="block px-4 py-2">All Jobs</Link></li>
          <li><Link to="/hr/job_post" className="block px-4 py-2">Job Post</Link></li>
          </>}
          {/* <li><Link to="/hr/users" className="block px-4 py-2">All Users</Link></li> */}
          {userRole == 'user' &&<li><Link to="/applied" className="block px-4 py-2">Applied</Link></li>}
          <li><button className="block px-4 py-2 cursor-pointer" onClick={logout}>Log Out</button></li>
          </ul>
        </div>
      </div>
      </>}

    </div>
  </nav>
  )
}

export default Navber
