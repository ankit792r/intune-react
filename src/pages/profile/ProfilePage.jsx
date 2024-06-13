import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/auth/authSlice'
import { useDispatch } from 'react-redux'

const ProfilePage = () => {
    const dispath = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = ()=>{
        dispath(logout())
        navigate("/")
    }
    return (
        <div>
            <Link to="/home">Home</Link> <button onClick={logoutHandler}>logout</button>
            <h1>profile</h1>
            <Outlet />
        </div>
    )
}

export default ProfilePage