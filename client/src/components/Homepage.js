import React from 'react';
import './Homepage.css';
import Header from './Header';
import ShopButton from './ShopButton';


const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="content">
        <div className="banner-text">
          <ShopButton />
        </div>
      </div>
    </div>
  );
}

export default HomePage;