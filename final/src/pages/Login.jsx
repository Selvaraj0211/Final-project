import React, { use, useState } from 'react'
import {signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth'
import { auth, provider } from '../config/firebase/Config'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    
    const [User, setuser] = useState("");
    const [Pass, setpass] = useState("");
    const navigate = useNavigate();

  const handleloginuser = async ()=>{
       const data = await signInWithEmailAndPassword(auth, User, Pass).then(()=>{
       console.log("login success")
       console.log(data)
       navigate('/')
       }).catch((err)=>{
        alert(err.message)
        console.log("login failed")

        
       })
       
    }

    const handlegoogleclick = async ()=>{
       const data = await signInWithPopup(auth, provider)
       console.log (data)
    }

  return (
    <>
    <div className="min-h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')] flex items-center justify-center px-4">
      <div className="bg-white  backdrop-blur-lg  rounded-lg p-8 w-full max-w-md opacity-85">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center ">
          Luxe Home Login
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your Email address"
              onChange={(e)=>setuser(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e)=>setpass(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-600 focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-yellow-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            onClick={handleloginuser}
            className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition"
          >
            Sign In
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-yellow-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default Login