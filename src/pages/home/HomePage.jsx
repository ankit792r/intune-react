import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { loadChats } from '../../redux/user/userReducer'

const HomePage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user);
    const status = useSelector(state => state.user.status);
    const chatLoaded = useSelector(state => state.app.chatLoaded)

    useEffect(() => {
        if (!chatLoaded) {
            dispatch(loadChats())
        }
    }, [])

    return (
        <div>
            <div>
                <div>
                    <Link to="/account">{user.username}</Link> <Link to="/requests">requests</Link> <Link to="/settings">settings</Link>
                </div>
                <div>
                    {
                        status === "loading"
                            ? <p>loading</p>
                            : <ul>
                                {
                                    user.chats.map(chat => {
                                        return <li><Link to={`/home/${chat._id}`}>{chat.name}</Link></li>
                                    })
                                }
                            </ul>
                    }

                </div>
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default HomePage