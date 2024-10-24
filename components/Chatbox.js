// components/Chatbox.js
import { useState } from 'react';
import styles from '../styles/Chatbox.module.css';

export default function Chatbox() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSendMessage = () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput(''); // Clear input field

    // Generate a bot response after a short delay
    setTimeout(() => {
      const botReply = generateBotReply(input);
      setMessages((prev) => [...prev, { text: botReply, sender: 'bot' }]);
    }, 500); // Small delay for better UX
  };

  const generateBotReply = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('hello')) {
      return 'Hi there! How can I help you today?';
    } else if (lowerCaseMessage.includes('your name')) {
      return "I'm your friendly portfolio chatbot!";
    } else if (lowerCaseMessage.includes('help')) {
      return 'Sure! What do you need help with?';
    } else {
      return "I'm not sure about that. Could you ask something else?";
    }
  };

  return (
    <div className={styles.chatbox}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === 'bot' ? styles.botMessage : styles.userMessage}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className={styles.input}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Send on Enter key press
        />
        <button onClick={handleSendMessage} className={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}
