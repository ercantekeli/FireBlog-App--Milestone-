import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Navbar from '../components/Navbar'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
            </Routes>
        </Router>
    );
}

export default AppRouter;