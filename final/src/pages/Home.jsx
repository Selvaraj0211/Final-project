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
  const { Cart, SetCart, Googleuser, name, Watchlist, } = useContext(ProductContext)
  const [User, setUser] = useState(null);

  useEffect(() => {

    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUser(user)
        console.log("user logged in")
      } else {
        // console.log("User logged out")
        navigate('/')
      }
    })
  }, [])


  useEffect(() => {
    if (User) {
      axios.get(`http://localhost:8080/cartget/${User.uid}`)
        .then(response => {
          const savedCart = response.data.cart;
          if (savedCart) {
            SetCart(savedCart);
          }
        })
        .catch(error => {
          console.error('Error loading cart:', error);
        });
    }
  }, [User]);

  return (
    <>
      <Nav />
      <Hero />
      <Product />


    </>
  );
};

export default Home;
