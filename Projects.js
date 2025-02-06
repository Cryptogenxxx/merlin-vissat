// src/components/Projects.js
import React from 'react';

const Projects = () => {
    return (
        <div style={{ backgroundColor: '#1F1F1F', color: '#FFFFFF', padding: '20px' }}>
            <h1 style={{ fontSize: '2.5em' }}>NEFTIT Projects</h1>
            <div className="project-list">
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '15px', marginBottom: '20px' }}>
                    <h2>Project Title</h2>
                    <p>Project description goes here.</p>
                    <a href="/project-detail" style={{ color: '#FF4500' }}>View Project</a>
                </div>
                {/* Repeat for other projects */}
            </div>
        </div>
    );
};

export default Projects;
