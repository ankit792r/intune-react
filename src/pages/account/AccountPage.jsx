import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { logout } from '../../redux/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountInfo } from '../../redux/account/accountReducer'

const AccountPage = () => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.account.info)
    const status = useSelector(state => state.account.status)

    useEffect(() => {
        dispatch(getAccountInfo())
    }, [])

    return (
        <div>
            <Link to="/home">Home</Link>
            <h3>{info.name} - {info.username}</h3>
            <ul>
                <li><Link to="/account">account</Link></li>
                <li><Link to="/account/friends">friends</Link></li>
                <br />
                <button onClick={() => { dispatch(logout()) }}>logout</button>
            </ul>
            <br />
            {
                status == 'loading' ? <p>loading</p> : <Outlet />
            }

        </div>
    )
}

export default AccountPage