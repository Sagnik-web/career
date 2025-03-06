import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import { registerAPI } from '../../API/Auth/authAPI';

function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory()

  const handleSignup = () => {
    //   e.preventDefault();
  
      if (password !== confirmPassword) {
        setError("Passwords don't match!");
        toast.error("Passwords don't match")
        return;
      }

      if(password.length <6){
        setError("Passwords don't match!");
        toast.error("Password mustbe more than 6 charecter.")
        return;
      }
  
      registerAPI({email:email,password:password})
      .then(res=>{
        console.log(res.data);
        toast.success("Register Successfully.")
        history.push('/login')
      })
      .catch(err=>{
        console.log(err);
        toast.error("Register Error.")

      })
      
    };




  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>

   
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {/* <form className="space-y-4" onSubmit={handleSignup}> */}
     
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      {/* </form> */}

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-700">Log In</Link>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Register
