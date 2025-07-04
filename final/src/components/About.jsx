import React from 'react'
import {FaTruck, FaFacebook, FaYoutube,FaTwitter    } from 'react-icons/fa'
import {VscWorkspaceTrusted } from 'react-icons/vsc'
import { FcSupport } from "react-icons/fc";
import { SiInstagram } from "react-icons/si";
import Nav from './Nav';

const About = () => {
  return (
    <>
    <div className=''><Nav/></div>

     <section className="mt-16 py-10 bg-gradient-to-br from-blue-50 to-indigo-50 text-center border-t-1 border-gray-300">
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>Features</h1>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gap-2 text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className=" h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTruck className='w-full h-full text-blue-500'/>
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Delivery</h3>
              <p className="text-gray-600">Free shipping on orders over $500. Fast and secure delivery to your doorstep.</p>
            </div>

            <div className=" text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <VscWorkspaceTrusted className='w-full h-full text-green-500'/>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">5-year warranty on all furniture. Premium materials and craftsmanship guaranteed.</p>
            </div>

            <div className=" text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-6">
                <FcSupport className='w-full h-full text-gray-500'/>
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your furniture needs and questions.</p>
            </div>
          </div>
        </div>
      </section>

{/* About */}

 <footer className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-700 px-12 py-10  border-t-1 border-gray-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-sm">
      
      {/* Corporate */}
      <div>
        <h3 className="font-semibold mb-2">Corporate</h3>
        <ul className="space-y-1">
          <li>About Us</li>
          <li>Corporate Governance</li>
          <li>In the News</li>
          <li>Careers</li>
        </ul>
      </div>

      {/* Useful Links */}
      <div>
        <h3 className="font-semibold mb-2">Useful Links</h3>
        <ul className="space-y-1">
          <li>Gift Cards</li>
          <li>Buy in Bulk</li>
          <li>Our Brands</li>
          <li>Our Blog</li>
          <li>Find a Store</li>
          <li>Partner With Us</li>
        </ul>
      </div>

      {/* Sell / Franchise */}
      <div>
        <h3 className="font-semibold mb-2">Partner With Us</h3>
        <ul className="space-y-1">
          <li>Sell on Platform</li>
          <li>Become a Franchisee</li>
          <li>Channel Partner</li>
          <li>Pep Homie Program</li>
          <li>Marketplace Policies</li>
          <li>Merchant Login</li>
        </ul>
      </div>

      {/* Help */}
      <div>
        <h3 className="font-semibold mb-2">Need Help?</h3>
        <ul className="space-y-1">
          <li>FAQs</li>
          <li>Policies</li>
          <li>Contact Us</li>
          <li>Built Safe Products</li>
        </ul>
      </div>

      {/* Popular Categories */}
      <div>
        <h3 className="font-semibold mb-2">Popular Categories</h3>
        <ul className="space-y-1">
          <li>Sofas, Beds, Tables</li>
          <li>Mattresses, Wardrobes</li>
          <li>Decor, Wall Art</li>
          <li>Office Furniture</li>
        </ul>
      </div>

      {/* Cities + Follow */}
      <div>
        <h3 className="font-semibold mb-2">Popular Cities</h3>
        <ul className="space-y-1">
          <li>Delhi, Mumbai, Bengaluru</li>
          <li>Chennai, Pune, Kolkata</li>
          <li>Hyderabad, Jaipur</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Follow Us</h3>
        <div className="flex space-x-3 text-lg">
          <SiInstagram className='hover:text-red-500'/>
          <FaFacebook  className='hover:text-blue-500'/>
          <FaYoutube className='hover:text-red-600'/>
          <FaTwitter className='hover:text-blue-600'/>
        </div>
      </div>
    </footer>
    </>
  )
}

export default About