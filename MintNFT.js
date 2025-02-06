// src/components/MintNFT.js
import React from 'react';

const MintNFT = () => {
    return (
        <div style={{ backgroundColor: '#1F1F1F', color: '#FFFFFF', padding: '20px' }}>
            <h1 style={{ fontSize: '2.5em' }}>Mint Your NEFTIT NFT</h1>
            <input style={{ padding: '10px', borderRadius: '5px', marginBottom: '10px' }} type="text" placeholder="NFT Name" />
            <button style={{ backgroundColor: '#00BFFF', color: '#FFFFFF', padding: '10px 15px', borderRadius: '5px' }}>Mint</button>
        </div>
    );
};

export default MintNFT;
