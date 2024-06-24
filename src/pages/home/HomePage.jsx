import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { fetchChats } from '../../redux/user/userReducer'
import Spinner from '../../components/Spinner'

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
        <div className="py-3" >
            <div className="row g-4">
                <div className="col-3">
                    <div className="" style={{ minHeight: "90vh" }}>
                        <div className="list-group">
                            {
                                status === "loading"
                                    ? <Spinner />
                                    : <div>
                                        <div className="list-group">
                                            {
                                                chats.map((chat, index) => {
                                                    return (
                                                        <Link key={index} to={`/home/${index}`} className="list-group-item list-group-item-action" >
                                                            <h6 className="mb-1">{chat.name}</h6>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className='my-1'>
                        <Link to={"/account"} className='btn btn-secondary'>
                            <i className="fa fa-user me-2"></i>
                            {username}
                        </Link>
                        <Link to={"/requests"} className='btn btn-secondary mx-2'>
                            <i className="fa fa-handshake me-2"></i>
                            requests
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <Outlet />
                </div>

            </div>
        </div >
    )
}

export default HomePage