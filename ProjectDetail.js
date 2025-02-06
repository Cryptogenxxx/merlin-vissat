// src/components/ProjectDetail.js
import React from 'react';

const ProjectDetail = () => {
    return (
        <div style={{ backgroundColor: '#1F1F1F', color: '#FFFFFF', padding: '20px' }}>
            <h1 style={{ fontSize: '2.5em' }}>Project Title</h1>
            <p>Detailed description of the project goes here.</p>
            <button style={{ backgroundColor: '#00BFFF', color: '#FFFFFF', padding: '10px 15px', borderRadius: '5px' }}>Mint NFT</button>
        </div>
    );
};

export default ProjectDetail;
