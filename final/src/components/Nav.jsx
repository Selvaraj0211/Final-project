import React, { useState, useContext } from 'react'
import { FaHeart, FaSearch, FaShoppingCart, FaUser, FaXbox, } from 'react-icons/fa'
import { CiMenuBurger } from 'react-icons/ci'
import { IoMdExit } from 'react-icons/io'
import { MdCancel } from 'react-icons/md'
import ProductContext from '../context/ProductContext';
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase/Config'




const Nav = () => {

  const [mobileview, setmobileview] = useState(false)
  const { Watchlist, Cart, setSearch, name, Googleuser } = useContext(ProductContext)
  const navigate = useNavigate()
  


  function logout() {
    signOut(auth)
    navigate('/')
  }

const handleusername = ()=>{
  
}


  return (
    < >
      <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-[#FFFBEA] backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto px-4 sm:px-3 py-4">
          {/* TiTle */}
          <div className="flex  justify-between gap-2 items-center">
            <div className="flex items-center">
              <img />
              <h1 className="text-2xl font-bold bg-[#3aac66] bg-clip-text text-transparent">
                LuxeHome
              </h1>
            </div>

            {/* Search bar */}

            {/* Options */}
            <div className="hidden md:flex items-center space-x-8">
              {/* <div className=" flex items-center bg-gray-100 rounded-full px-4 py-2 w-3xs">
                <FaSearch className="w-4 h-4 text-gray-500 mr-2" />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search furniture..."
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div> */}
              <Link to='/home' className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link to='/Product' className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Products</Link>
              <Link to='/about' className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
              <Link to='/contact' className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
            </div>

            {/* actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden relative md:block p-2 text-gray-700 hover:text-red-500 transition-colors">
                <FaHeart className="w-5 h-5" />
                <span className="absolute top-3 right-3.5  text-white text-xs rounded-full w-2 h-2 flex items-center justify-center">
                  {Watchlist.length}
                </span>
              </button>
              {/* <button 
              onClick={handleusername}
              className="hidden md:block p-2 text-gray-700 hover:text-blue-600 transition-colors">
                {name}{Googleuser} <FaUser className="w-5 h-5" />
              </button> */}

              <Link to ='/Cart' className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <FaShoppingCart className="w-5 h-5" />
                {Cart.length>0?(<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {Cart.length}
                </span>):(null) }
              </Link>

              <button
                onClick={logout}
                className='flex items-center gap-1 text-xs rounded h-8 w-16 text-center text-red-500 font-bold'><IoMdExit />Logout</button>
              <button
                className="md:hidden p-2 text-gray-700"
                onClick={() => { setmobileview(!mobileview) }}
              >
                {mobileview ? (<MdCancel className="w-5 h-5" />) : (<CiMenuBurger className="w-5 h-5" />)}

              </button>
            </div>
          </div>
          {/* mobile view option */}
          {mobileview && (
            <div className="flex justify-end mr-5">

              <div className="space-y-2  ">

                <Link to='/home' className="block py-2 text-gray-700 hover:text-blue-600"> Home</Link>
                <Link to='/Product' className="block py-2 text-gray-700 hover:text-blue-600"> Products</Link>
                <Link to='/about' className="block py-2 text-gray-700 hover:text-blue-600"> About</Link>
                <Link to='/contact' className="block py-2 text-gray-700 hover:text-blue-600"> Contact</Link>
              </div>
            </div>
          )}

        </nav>
      </header>
    </>
  )
}

export default Nav