import React, { useState, useEffect, useRef } from 'react';
import styles from './App.module.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messageContainerRef = useRef(null);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('wss://chat-app-yttg.onrender.com');

    ws.current.onmessage = async (event) => {
      const messageData = event.data instanceof Blob ? await event.data.text() : event.data;
      setMessages((prevMessages) => [...prevMessages, { text: messageData, type: 'left' }]);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text: inputValue, type: 'right' }]);
      ws.current.send(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className={styles.tradeContainer}>
      {/* Chat Section */}
      <div id="chat-container" className={styles.tradeChatContainer}>
        <div className={styles.tradeChatHeader}>
          <h2 className={styles.tradeCardTitle}>Chat</h2>
          <p className={styles.tradeCardDescription}>Discuss course trade details</p>
        </div>

        <div id="messages" ref={messageContainerRef} className={styles.tradeMessages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.tradeMessage} ${
                message.type === 'right' ? styles.tradeMessageRight : styles.tradeMessageLeft
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div id="input-container" className={styles.tradeInputContainer}>
          <input
            type="text"
            id="message"
            className={styles.tradeMessageInput}
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button id="send-btn" className={styles.tradeSendButton} onClick={sendMessage}>
            Send <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      {/* Course Info Section */}
      <div className={styles.tradeCard}>
        <div className={styles.tradeCardHeader}>
          <h2 className={styles.tradeCardTitle}>Course Information</h2>
          <p className={styles.tradeCardDescription}>Review and manage course trade</p>
        </div>
        <div className={styles.tradeCourseInfo}>
          <div className={styles.tradeCourseSection}>
            <h3 className={styles.tradeSectionTitle}>Your Trade</h3>
            <div className={styles.tradeCourseCard}>
              <h4 className={styles.tradeCourseTitle}>Advanced TypeScript</h4>
              <p className={styles.tradeCourseDescription}>Master TypeScript with advanced concepts and real-world applications</p>
              <span className={styles.tradeBadge}>40 hours</span>
              <ul className={styles.tradeCourseFeatures}>
                <li>Advanced type system features</li>
                <li>Generics and utility types</li>
                <li>TypeScript with React</li>
              </ul>
            </div>
          </div>

          <div className={styles.tradeCourseSection}>
            <h3 className={styles.tradeSectionTitle}>Offered Trade</h3>
            <div className={styles.tradeCourseCard}>
              <h4 className={styles.tradeCourseTitle}>Advanced React</h4>
              <p className={styles.tradeCourseDescription}>Deep dive into React with advanced patterns and performance optimization</p>
              <span className={styles.tradeBadge}>35 hours</span>
              <ul className={styles.tradeCourseFeatures}>
                <li>Advanced hooks and patterns</li>
                <li>Performance optimization</li>
                <li>State management</li>
              </ul>
            </div>
          </div>

          <div className={styles.tradeActions}>
            <button className={`${styles.tradeButton} ${styles.tradeRejectButton}`}>
              ✕ Reject Trade
            </button>
            <button className={`${styles.tradeButton} ${styles.tradeAcceptButton}`}>
              ✓ Accept Trade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
