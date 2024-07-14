// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route and Routes instead of Switch
import Header from './components/Header';
import Homepage from './components/Homepage';
import ShopButton from './components/ShopButton';
// import Chatbot from './components/Chatbot';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotOpen = () => {
    setShowChatbot(true);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ShopButton" element={<ShopButton />} />
        </Routes>
        {!showChatbot && <ShopButton onChatbotOpen={handleChatbotOpen} />}
      </div>
    </Router>
  );
}

export default App;
