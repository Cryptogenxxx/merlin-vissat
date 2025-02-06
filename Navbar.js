// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#1F1F1F', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ color: '#00BFFF' }}>NEFTIT</h1>
            <div>
                <a href="/" style={{ color: '#FFFFFF', margin: '0 15px' }}>Home</a>
                <a href="/projects" style={{ color: '#FFFFFF', margin: '0 15px' }}>Projects</a>
                <a href="/profile" style={{ color: '#FFFFFF', margin: '0 15px' }}>Profile</a>
                <a href="/about" style={{ color: '#FFFFFF', margin: '0 15px' }}>About</a>
            </div>
        </nav>
    );
};

export default Navbar;
