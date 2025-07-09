import React, { use, useContext, useEffect, useState } from 'react'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, provider } from '../config/firebase/Config'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import ProductContext from '../context/ProductContext'
import axios from 'axios';


const Login = () => {

  const [Pass, setpass] = useState("");
  const [showpass, setshowpass] = useState(false);
  const navigate = useNavigate();
  const { Googleuser, User, setuser, setGoogleuser, name } = useContext(ProductContext)

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log("user logged in")
        navigate('/home')
      } else {
        console.log("User logged out")
      }
    })
  }, [])

  const handleloginuser = async () => {
    const data = await signInWithEmailAndPassword(auth, User, Pass).then(() => {
      console.log("login success")
      console.log(name)
      navigate('/home')
    }).catch((err) => {
      alert(err.message)
      console.log("login failed")

    })

    axios.post('http://localhost:8080/login', {
      user: User, pass:Pass

    }).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.error(error);
      });


  }

  const handlegoogleclick = async () => {
    const { userid = null } = await signInWithPopup(auth, provider)
    console.log(userid)
    setGoogleuser(userid)


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
                onChange={(e) => setuser(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type={showpass ? "password" : "text"}
                placeholder="Enter your Password"
                onChange={(e) => setpass(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-700">
                <input 
                onClick={() => setshowpass(!showpass)}
                type="checkbox" 
                className="mr-2" />
                Show Password
              </label>
              <span href="#" className="text-sm text-red-700 hover:underline">
                Forgot password?
              </span>
            </div>
            <button
              type="submit"
              onClick={handleloginuser}
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition"
            >
              Sign In
            </button>

            <button
              onClick={handlegoogleclick}
              className="flex items-center justify-center gap-2 bg-white text-gray-700 px-4 py-2 w-full"
            >
              <FaGoogle className="w-5 h-5" />
              <span className="text-sm font-medium">Sign in with Google</span>
            </button>

          </div>
          <p className="mt-3 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-teal-900 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login