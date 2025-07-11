import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext';
import Chairs from '../productpage/Chairs';
import { FaHeart, FaRegHeart , FaShoppingCart } from 'react-icons/fa';
import Nav from './Nav';

const Cart = () => {
    const { Cart, Watchlist,handlewatch,handleremove, handlecart, } = useContext(ProductContext);

    return (
        <>
            <Nav />
            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 h-screen'>
                <h2 className="text-5xl font-bold mt-18 text-center">Your Cart Items</h2>

                {Cart.length === 0 ? (
                    <p className="text-gray-600 text-center text-lg mt-5">
                        Your cart is currently empty.
                        <br />
                        <span className="text-sm text-gray-500">
                            Looks like you haven’t added anything yet. Start shopping and explore our latest products!
                        </span>
                    </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                            {Cart.map((item) => {
                              const incart = Cart.some((p) => p.id === item.id);
                              const inWatchlist = Watchlist.some((p)=>p.id===item.id);
                              return (
                                <div
                                  key={item.id}
                                  className="bg-white w-4xs rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden"
                                >
                                  
                                  <button
                                    onClick={() => handlewatch(item)}
                                    className="absolute top-4 right-5 z-10 p-2 rounded-full text-red-500"
                                  >
                                    {inWatchlist? <FaHeart /> : <FaRegHeart/>}
                                  </button>
                  
                                  
                                  <div className="overflow-hidden rounded-lg">
                                    <img
                                      src={item.image_path}
                                      alt={item.category}
                                      className="w-full h-60 object-contain transform transition-transform duration-300 group-hover:scale-110"
                                    />
                                  </div>
                  
                                 
                                  <h1 className="text-xl font-semibold text-gray-800 mt-4">Name: {item.name}</h1>
                                  <h2 className="text-md mt-1">Price: $ {item.price}</h2>
                                  <h2 className="text-md text-indigo-600 mt-1">Wood type: {item.wood_type}</h2>
                                  <p className="text-sm text-gray-500 mb-4">Status: {item.status}</p>
                  
                                  
                                  <div className="flex justify-between">
                                    <button
                                      onClick={() => incart ? handleremove(item) : handlecart(item)}
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


                )}
            </div>
        </>
    );
};


export default Cart