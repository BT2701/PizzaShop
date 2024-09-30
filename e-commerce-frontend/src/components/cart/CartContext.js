import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Tạo Context
const CartContext = createContext();

// Provider để cung cấp trạng thái giỏ hàng cho các component con
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  // Hàm để lấy dữ liệu từ API
  const fetchCartCount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/cart`,{withCredentials: true}); // Đường dẫn API lấy số lượng sản phẩm trong giỏ hàng
      setCartCount(response.data.count);
    } catch (error) {
      console.error('Failed to fetch cart count:', error);
    }
  };

  useEffect(() => {
    fetchCartCount(); 
  }, []);

  const addToCart = async () => {
    try {
      setCartCount(cartCount + 1); 
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };
  const removeFromCart = async()=>{
    try {
      setCartCount(cartCount-1);
    } catch (error) {
      console.error(error);
    }
  };
  const pay = async()=>{
    try {
      setCartCount(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart, pay }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook để sử dụng CartContext
export const useCart = () => useContext(CartContext);
