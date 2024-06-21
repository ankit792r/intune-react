import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { fetchChats } from '../../redux/user/userReducer'

const HomePage = () => {
    const dispatch = useDispatch()
    const fetched = useRef(false)
    const username = useSelector(state => state.user.user.username);
    const chats = useSelector(state => state.user.user.chats);
    const status = useSelector(state => state.user.status);

    useEffect(() => {
        if (!fetched.current) {
            dispatch(fetchChats())
        }

        return () => { fetched.current = true }
    }, [])

    return (
        <div>
            <div>
                <div>
                    <Link to="/account">{username}</Link> <Link to="/requests">requests</Link> <Link to="/settings">settings</Link>
                </div>
                <div>
                    {
                        status === "loading"
                            ? <p>loading</p>
                            : <ul>
                                {
                                    chats.map((chat, index) => {
                                        return <li><Link to={`/home/${index}`}>{chat.name}</Link></li>
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