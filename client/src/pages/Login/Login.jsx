import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { CookieStorage } from 'cookie-storage';
import { loginAPI } from '../../API/Auth/authAPI';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../Redux/Slice/userSlice';


function Login() {
  const cookieStorage = new CookieStorage();
  const history = useHistory()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);

    loginAPI({email:email,password:password})
    .then(async res=>{
      toast.success('Login Successfully')
      console.log(res.data);
      await cookieStorage.setItem('token',res.data.token)
      dispatch(getUser(res.data.user))
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      {/* <form className="space-y-4" onSubmit={handleLogin}> */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
            onClick={handleLogin}
         >
            Log In
          </button>
        </div>
      {/* </form> */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:text-blue-700">Sign Up</Link>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login
