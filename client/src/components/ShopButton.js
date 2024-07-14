// src/components/ShopButton.js
import React from 'react';
import './ShopButton.css';
import { Link } from 'react-router-dom';

const ShopButton = ({ onChatbotOpen }) => {
  const handleClick = () => {
    onChatbotOpen();
  };

  return (
    <Link to="/chatbot" className="shop-button" onClick={handleClick}>
      Shop Now
    </Link>
  );
}

export default ShopButton;
