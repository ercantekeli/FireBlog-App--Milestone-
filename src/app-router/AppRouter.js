import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'
import Dasboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Profile from "../pages/Profile"
import NewBlog from "../pages/NewBlog"
import Details from "../pages/Details"
import PrivateRouter from "../app-router/PrivateRouter"

const AppRouter = () => {


    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dasboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<PrivateRouter />}>
                    <Route path="/details" element={<Details />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/newblog" element={<NewBlog />} />
                </Route>


            </Routes>
        </Router>
    )
}

export default AppRouter