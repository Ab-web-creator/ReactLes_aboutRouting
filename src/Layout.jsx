import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from "./Navigation.jsx";
import './App.css'


const Layout = () => {
    return (
        <div className='general-container'>
            <Navigation/>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout