import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [Watchlist, setwatchlist] = useState([]);
  const [name, setName] = useState("");
  const [Cart, SetCart] = useState([]);
  const [buying, setbuying] = useState([]);
  const [Search, setSearch] = useState([]);
  const [Googleuser, setGoogleuser] = useState([]);
  const [categoryproduct, setcategoryproduct] = useState([]);


  // Search product by category
  useEffect(() => {
    if (!Search || Search.length === 0) return;

    axios
      .get(`https://furniture-api.fly.dev/v1/products?category=${Search}`)
      .then((response) => {
        setSearch(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message || 'Something went wrong');
      });
  }, [Search]);

  // Add/remove from watchlist
  const handlewatch = (prod) => {
    const index = Watchlist.findIndex((p) => p.id === prod.id);
    if (index === -1) {
      setwatchlist([...Watchlist, prod]);
    } else {
      setwatchlist([
        ...Watchlist.slice(0, index),
        ...Watchlist.slice(index + 1),
      ]);
    }
  };

  // Add/remove from cart
  const handlecart = (prod) => {
    const index = Cart.findIndex((p) => p.id === prod.id);
    if (index === -1) {
      SetCart([...Cart, prod]);
    } else {
      SetCart([
        ...Cart.slice(0, index),
        ...Cart.slice(index + 1),
      ]);
    }
  };
  console.log(Cart);


  // Proceed to buy
  const productbuy = (prod) => {
    const index = buying.findIndex((p) => p.id === prod.id);
    if (index === -1) {
      setbuying([...buying, prod]);
    } else {
      setbuying([
        ...buying.slice(0, index),
        ...buying.slice(index + 1),
      ]);
    }
  };



  return (
    <ProductContext.Provider value={{ Googleuser, setGoogleuser, name, setName, Watchlist, Cart, handlewatch, handlecart, setSearch, productbuy, buying, categoryproduct, setcategoryproduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

