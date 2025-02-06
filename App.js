// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import UserProfile from './components/UserProfile';
import MintNFT from './components/MintNFT';
import Auth from './components/Auth';
import About from './components/About';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/project-detail" component={ProjectDetail} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/mint" component={MintNFT} />
                <Route path="/auth" component={Auth} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
};

export default App;
