// src/components/Auth.js
import React from 'react';

const Auth = () => {
    return (
        <div style={{ backgroundColor: '#1F1F1F', color: '#FFFFFF', padding: '20px' }}>
            <h1 style={{ fontSize: '2.5em' }}>Login / Sign Up to NEFTIT</h1>
            <input style={{ padding: '10px', borderRadius: '5px', marginBottom: '10px' }} type="email" placeholder="Email" />
            <input style={{ padding: '10px', borderRadius: '5px', marginBottom: '10px' }} type="password" placeholder="Password" />
            <button style={{ backgroundColor: '#00BFFF', color: '#FFFFFF', padding: '10px 15px', borderRadius: '5px' }}>Login</button>
            <button style={{ backgroundColor: '#FF4500', color: '#FFFFFF', padding: '10px 15px', borderRadius: '5px', marginLeft: '10px' }}>Sign Up</button>
        </div>
    );
};

export default Auth;
