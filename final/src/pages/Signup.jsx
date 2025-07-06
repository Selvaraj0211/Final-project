import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../config/firebase/Config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import ProductContext from '../context/ProductContext'


const Signup = () => {

    const [ user, setUser ] = useState("");
    const [ pass, setPass ] = useState("");
    const { name, setName} = useContext(ProductContext);

    const navigate = useNavigate();

    const handleSignup = async () => {
        const userdata = await createUserWithEmailAndPassword(auth, user, pass, name).then(()=>{
        console.log("user Registered")
        navigate("/")
        })
    }

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

    return (
        <>
            <div className="min-h-screen flex items-center justify-center  bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')] px-4">
                <div className="bg-white opacity-85 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm text-gray-700">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                onChange={(e) => setUser(e.target.value)}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPass(e.target.value)}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={handleSignup}
                            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md transition"
                        >
                            Sign Up
                        </button>
                    </div>

                    <p className="text-sm text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-yellow-600 hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Signup