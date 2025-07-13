import React from 'react'
import design1 from '../assets/design1.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
     <section className="-mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center pt-20 shadow-xs pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className=" relative items-center">
            <img src={design1} className='w-full h-[90vh] object-cover rounded-2xl ' />
          <div className="text-center absolute top-7 left-8  sm:text-xs lg:text-left">
            <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Living Space
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-lg">
              Discover premium furniture that combines elegance, comfort, and modern design for every room in your home.
            </p>
            <div className="flex sm:flex-row gap-2 pb-2 sm: justify-center md:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Shop Collection
              </button>
              <Link className="border-2 border-gray-300 text-gray-700 px-3 py-1.5 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              to='/Product'>                
                View Catalog
              </Link>
            </div>
          </div>      
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero