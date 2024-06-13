import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AuthPage = () => {
    return (
        <div>
            <Link to="/">home</Link>
            <h1>Auth Page</h1>
            <br />
            <Outlet />
        </div>
    )
}

export default AuthPage