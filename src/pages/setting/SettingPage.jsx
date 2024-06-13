import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const SettingPage = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <h1>settings</h1>
            <Outlet/>
        </div>
    )
}

export default SettingPage