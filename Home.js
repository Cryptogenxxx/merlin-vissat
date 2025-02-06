// src/components/Home.js
import React from 'react';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#1F1F1F', color: '#FFFFFF', padding: '20px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3em', margin: '20px 0' }}>Welcome to NEFTIT</h1>
            <p>Your go-to platform for NFT projects.</p>
            <a href="/projects" style={{ color: '#FF4500', fontSize: '1.5em'}}>Explore Projects</a>
        </div>
    );
};

export default Home;
