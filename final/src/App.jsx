import { useContext, useState } from 'react'
import {BrowserRouter, Routes, Route} from'react-router-dom'
import Home from './Pages/Home'
import Product from './components/Product'
import Stool from './productpage/Stools'
import ProductContext, { ProductProvider } from './context/ProductContext'
import About from './components/About'
import Contact from './components/Contact'
import Lamp from './productpage/Lamp'
import Table from './productpage/Table'
import Vanitory from './productpage/Vanitory'
import Desks from './productpage/Desks'
import Mirrors from './productpage/Mirrors'
import Garden from './productpage/Garden'
import Tvtable from './productpage/TvTables'
import Chairs from './productpage/Chairs'
import Mattress from './productpage/Mattress'
import Sofa from './productpage/Sofa'
import Kitchen from './productpage/Kitchen'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './components/Cart'



function App() {
  
   



  return (
    <ProductProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />      
      <Route path='/signup' element={<Signup/>} />      
      <Route path='/home' element={<Home/>} />
      <Route path='/Product' element={<Product/>} />
      <Route path='/Product/stools' element={<Stool/>} />
      <Route path='/Product/lamps' element={<Lamp/>} />
      <Route path='/Product/table' element={<Table/>} />
      <Route path='/Product/Vanitory' element={<Vanitory/>} />
      <Route path='/Product/desk' element={<Desks/>} />
      <Route path='/Product/mirror' element={<Mirrors/>} />
      <Route path='/Product/garden' element={<Garden/>} />
      <Route path='/Product/tvtable' element={<Tvtable/>} />
      <Route path='/Product/chair' element={<Chairs/>} />
      <Route path='/Product/matress' element={<Mattress/>} />
      <Route path='/Product/sofa' element={<Sofa/>} />
      <Route path='/Product/kitchen' element={<Kitchen/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/Cart' element={<Cart/>} />
    </Routes>    
    </BrowserRouter>
    </ProductProvider>
  )
}

export default App
