import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { logout } from '../../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const AccountPage = () => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.user.user)
    const status = useSelector(state => state.user.status)

    return (
        <div>
            <Link to="/home">Home</Link>
            <h3>{info.name} - {info.username}</h3>
            <ul>
                <li><Link to="/account">account</Link></li>
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