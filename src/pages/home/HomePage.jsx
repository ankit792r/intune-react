import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import socket from '../../services/socketService'

const HomePage = () => {
    const user = useSelector(state => state.user.user);
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        socket.auth = { token }
        socket.connect()
    }, [])

    return (
        <div>
            <div>
                <div>
                    <Link to="/account">{user.username}</Link> <Link to="/friends">friends</Link> <Link to="/settings">settings</Link>
                </div>
                <div>
                    <ul>
                        {
                            user.chats.map(chat=>{
                                return <li><Link to={`/home/${chat._id}`}>{chat.name}</Link></li>
                            })
                        }
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