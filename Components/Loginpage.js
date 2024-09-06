// Components/Loginpage.js
"use client";

import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '@/firebase'; // Adjust the path according to your directory structure

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'username') {
      setUsername(value.trim()); // Remove any extra spaces
    } else if (id === 'password') {
      setPassword(value.trim()); // Remove any extra spaces
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!username || !password) {
        throw new Error('Username and password must not be empty.');
      }

      // Register new user with email and password
      await createUserWithEmailAndPassword(auth, username, password);
      setPopupMessage('Registration successful');
    } catch (error) {
      console.error('Firebase error:', error);
      if (error.code === 'auth/email-already-in-use') {
        setPopupMessage('Already registered');
      } else {
        setPopupMessage(`Error: ${error.message}`);
      }
    }

    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='container'>
      <h3 id='h3'>Create Your Account</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={handleInputChange}
          placeholder='Enter your username'
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={handleInputChange}
          placeholder='Enter your password'
        />
        <button type='submit'>Create</button>
      </form>

      {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <span className='close-btn' onClick={closePopup}>&times;</span>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Loginpage;
