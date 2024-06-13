import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { logout } from '../../redux/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountInfo } from '../../redux/account/accountReducer'

const AccountPage = () => {
    const dispath = useDispatch()

    const info = useSelector(state => state.account.info)

    useEffect(() => {
        dispath(getAccountInfo())
    }, [])


    return (
        <div>
            <Link to="/home">Home</Link> <button onClick={()=>{dispath(logout())}}>logout</button>
            <h1>{info.name}</h1>
            <Outlet />
        </div>
    )
}

export default AccountPage