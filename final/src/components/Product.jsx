import React, { useState, useEffect } from 'react';




import { Link } from 'react-router-dom';
import stool from '../assets/Stool.jpg'
import lamp from '../assets/lamp.jpg'
import table from '../assets/table.jpg'
import desk from '../assets/desk.jpg'
import sink from '../assets/sink.jpg'
import mirror from '../assets/mirror.jpg'
import garden from '../assets/garden.jpg'
import Tvtable from '../assets/Tvtable.jpg'
import chair from '../assets/chair.jpg'
import Kitchan from '../assets/Kitchan.jpg'
import Shofa from '../assets/Shofa.jpg'
import mattress from '../assets/mattress.jpg'
import Nav from './Nav';
import Hero from './Hero';
import About from './About';




const Product = () => {

  return (
    <>
      <div className=''><Nav /></div>


      <section className='mt-16 -mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 pb-2'>
        <div className='text-center'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              Popular Categories
            </h2>
            <p className='text-xl text-gray-700 max-w-2xl mx-auto'>Carefully curated furniture pieces to elevate your living space</p>
          </div>


          <div className='max-w-8xl mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <Link to="/Product/stools" >
              <img src={stool} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Stools</h2>
              </div>
            </Link>

            <div className=''>
              <Link to="/Product/lamps" >
                <img src={lamp} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
                <div className="p-3 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">Lamps</h2>
                </div>
              </Link>
            </div>

            <div className=''>
              <Link to="/Product/table">
                <img src={table} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
                <div className="p-3 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">Tables</h2>
                </div>
              </Link>
            </div>

            <div className=''>
              <Link to="/Product/Vanitory">
                <img src={sink} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
                <div className="p-3 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">Vanitory</h2>

                </div>
              </Link>
            </div>

            <div className=''>
              <Link to='/Product/desk'>
                <img src={desk} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
                <div className="p-3 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">Desks</h2>
                </div>
              </Link>
            </div>

            <div className=''>
              <Link to='/Product/mirror'>
              <img src={mirror} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Mirrors</h2>
              </div>
              </Link>
            </div>

            <div className=''>
              <Link to='/Product/garden'>
              <img src={garden} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Garden accessories</h2>
              </div>
              </Link>
            </div>

            <div className=''>
              <Link to='/Product/tvtable'>
              <img src={Tvtable} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">TV-Tables</h2>
              </div>
              </Link>
            </div>

            <div className=''>
              <Link t0='/Product/chair'>
              <img src={chair} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Chairs</h2>
              </div>
              </Link>
            </div>

            <div className=''>
              <Link to='/Product/matress'>
              <img src={mattress} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Mattress</h2>
              </div>
              </Link>
            </div>

            <div className=''>
              <Link to='/Product/sofa'>
              <img src={Shofa} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Sofa</h2>
              </div>
              </Link>
            </div>

            <div className=''>
              <Link to='/Product/kitchen'>
              <img src={Kitchan} className="w-full h-auto shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-xl" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Kitchen tables</h2>
              </div>
              </Link>
            </div>

          </div>

        </div>


      </section>

      <About />
    </>
  );
};

export default Product;
