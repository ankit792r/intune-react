import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import socket from '../../services/socketService'

const HomePage = () => {
    const username = useSelector(state => state.account.info?.username)
    const token = useSelector(state => state.auth.token)
    const chats  = useSelector(state=> state.chat.chats)
    
    useEffect(() => {
        socket.auth = { token }
        socket.connect()
    }, [])

    return (
        <div>
            <div>
                <div>
                    <Link to="/account">{username ? username : "account"}</Link> <Link to="/friends">friends</Link> <Link to="/settings">settings</Link>
                </div>
                <div>
                    <ul>
                        {
                            chats.map(chat=>{
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