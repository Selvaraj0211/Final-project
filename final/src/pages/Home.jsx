import React, { useContext, useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Product from '../components/Product';
import About from '../components/About';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase/Config';
import ProductContext from '../context/ProductContext';
import axios from 'axios'


const Home = () => {

  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const { Cart, SetCart, User, Googleuser, name, Watchlist, } = useContext(ProductContext)


  useEffect(() => {

    auth.onAuthStateChanged(function (user) {
      if (user) {
        // console.log("user logged in")
      } else {
        // console.log("User logged out")
        navigate('/')
      }
    })
  }, [])

//   useEffect(() => {
//     if (Cart) {
//       axios.post('http://localhost:8080/cartsave', {
//         user: User,
//         cart: Cart,
//         googleUser: Googleuser,
//         watchlist: Watchlist,
//       })
//         .then(response => {
//           console.log('Cart saved:', response.data);

//         })
//         .catch(error => {
//           console.error('Error saving cart:', error);
//         });
//     }
//   }, [Cart]);

//   useEffect(() => {
//   if (User) {
//     axios.get(`http://localhost:8080/cartget/${User._id}`)
//       .then(response => {
//         const savedCart = response.data.cart;
//         if (savedCart) {
//           SetCart(savedCart); 
//         }
//       })
//       .catch(error => {
//         console.error('Error loading cart:', error);
//       });
//   }
// }, [User]);

  return (
    <>
      <Nav />
      <Hero />
      <Product />


    </>
  );
};

export default Home;
