import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProfilePage = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <h1>profile</h1>
            <Outlet />
        </div>
    )
}

export default ProfilePage