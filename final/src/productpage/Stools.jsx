import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import Nav from '../components/Nav';
import { FaHeart, FaRegHeart , FaShoppingCart } from 'react-icons/fa';

import ProductContext from '../context/ProductContext';

const Stool = () => {
  
  const { Watchlist, Cart, handlewatch, handlecart, productbuy, buying, categoryproduct, setcategoryproduct } = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://furniture-api.fly.dev/v1/products?category=stool');
        setcategoryproduct(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Nav />
      <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen mt-5">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 pt-8 mt-4">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categoryproduct.map((prod) => {
            const incart = Cart.some((p) => p.id === prod.id);
            const inWatchlist = Watchlist.some((p)=>p.id===prod.id);
            return (
              <div
                key={prod.id}
                className="bg-white w-4xs rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden"
              >
                
                <button
                  onClick={() => handlewatch(prod)}
                  className="absolute top-8 right-4 z-10 p-2 rounded-full text-red-500"
                >
                  {inWatchlist? <FaHeart /> : <FaRegHeart/>}
                </button>

                
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={prod.image_path}
                    alt={prod.category}
                    className="w-full h-60 object-full transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

               
                <h1 className="text-xl font-semibold text-gray-800 mt-4">Name: {prod.name}</h1>
                <h2 className="text-md mt-1">Price: $ {prod.price}</h2>
                <h2 className="text-md text-indigo-600 mt-1">Wood type: {prod.wood_type}</h2>
                <p className="text-sm text-gray-500 mb-4">Status: {prod.status}</p>

                
                <div className="flex justify-between">
                  <button
                    onClick={() => handlecart(prod)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition duration-200 ${
                      incart
                        ? 'bg-gray-600 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    <FaShoppingCart />
                    {incart ? 'In Cart' : 'Add to Cart'}
                  </button>

                   <button                    
                    className="flex items-center gap-2 px-4 py-2 rounded-full transition duration-200 bg-gray-400 text-white font-bold hover:text-black">
                    Buy                    
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Stool;
