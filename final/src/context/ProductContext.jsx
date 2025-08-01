import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [Watchlist, setwatchlist] = useState([]);
  const [name, setName] = useState("");
  const [User, setuser] = useState("");
  const [Cart, SetCart] = useState([]);
  const [buying, setbuying] = useState([]);
  const [Search, setSearch] = useState([]);
  const [Googleuser, setGoogleuser] = useState([]);
  const [categoryproduct, setcategoryproduct] = useState([]);



  // useEffect(() => {
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
    const updatedCart = index === -1
      ? [...Cart, prod]
      : [...Cart.slice(0, index), ...Cart.slice(index + 1)];

    SetCart(updatedCart);

      axios.post('https://final-project-47rc.onrender.com/cartsave', {
      cart: updatedCart,
      user: User, 
    })
      .then(response => {
        console.log("Cart saved:", response.data);
      })
      .catch(error => {
        console.error("Save error:", error);
      });
  };
  
  const handleremove = (prod) =>{
    const index = Cart.findIndex((p) => p.id === prod.id);
    const updatedCart = index === 1
      ? [...Cart, prod]
      : [...Cart.slice(0, index), ...Cart.slice(index + 1)];

      SetCart(updatedCart);

     axios.post('https://final-project-47rc.onrender.com/cartremove', {
      cart: updatedCart,
      user: User, 
    })
      .then(response => {
        console.log("Cart updated after removal:", response.data);
      })
      .catch(error => {
        console.error("Remove error:", error);
      });

   }



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
    <ProductContext.Provider value={{ User, setuser, Googleuser, setGoogleuser, name, setName, Watchlist, Cart, handlewatch,handleremove, handlecart, setSearch, productbuy, buying, categoryproduct, setcategoryproduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

