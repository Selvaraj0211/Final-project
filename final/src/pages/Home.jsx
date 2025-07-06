import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Product from '../components/Product';
import About from '../components/About';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase/Config';

const Home = () => {

const navigate = useNavigate()


useEffect(() => {
  
        auth.onAuthStateChanged(function (user) {
          if (user) {
            console.log("user logged in")
          } else {
            console.log("User logged out")
            navigate('/')
          }
        })
      }, [])

  return (
    <>
      <Nav/>
      <Hero/>
      <Product/>
      
      
    </>
  );
};

export default Home;
