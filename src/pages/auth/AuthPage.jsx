import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthPage = () => {
    return (
        <div className='py-5'>
            <div className="row justify-content-center">
                <div className="col-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthPage