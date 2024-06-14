import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import socket from '../../services/socketService'
import { addCallbacks, removeCallbacks } from '../../services/socketCallbacks'

const HomePage = () => {
    const username = useSelector(state => state.account.info?.username)
    const token = useSelector(state => state.auth.token)
    
    useEffect(() => {
        socket.auth = { token }
        socket.connect()

        addCallbacks()

        return () => {
            removeCallbacks()
        }
    }, [])

    return (
        <div>
            <div>
                <div>
                    <Link to="/account">{username ? username : "account"}</Link> <Link to="/friends">friends</Link> <Link to="/settings">settings</Link>
                </div>
                <div>
                    <ul>
                        <li><Link to="/home/chat1">chat 1</Link></li>
                        <li><Link to="">chat 2</Link></li>
                        <li><Link to="">chat 3</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default HomePage