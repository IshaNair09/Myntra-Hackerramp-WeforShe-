// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Myntra Muse. I will assist you for building your closet.", sender: "bot" }
  ]);
  const [userMessage, setUserMessage] = useState('');

  const handleSendMessage = () => {
    if (userMessage.trim() !== '') {
      setMessages([...messages, { text: userMessage, sender: "user" }]);
      setUserMessage('');
    }
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="messages-display">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-bar">
        <input
          type="text"
          value={userMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
