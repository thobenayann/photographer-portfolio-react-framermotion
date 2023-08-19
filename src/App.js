import React from 'react';
// components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
// router
import { BrowserRouter as Router } from 'react-router-dom';
// framer motion
import { motion } from 'framer-motion';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <AnimRoutes />
            </Router>
        </>
    );
};

export default App;
