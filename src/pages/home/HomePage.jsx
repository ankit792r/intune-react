import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { fetchChats } from '../../redux/user/userReducer'
import Spinner from '../../components/Spinner'

const HomePage = () => {
    const dispatch = useDispatch()
    const fetched = useRef(false)
    const name = useSelector(state => state.user.user.name);
    const profilePic = useSelector(state => state.user.user.profilePic);
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

                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img loading="lazy" src={profilePic} alt="..." className='rounded-start' style={{ objectFit: "cover", width: "100%", height: "100%", }} />
                            </div>
                            <div className="col">
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <div className="card-text"><Link to="/account">account</Link> <Link to="/requests">requests</Link> </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="list-group">
                        {
                            status === "loading"
                                ? <Spinner/>
                                : <div>
                                    <p className='fw-bold mt-2'>Chats</p>
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
                <div className="col">
                    <Outlet />
                </div>

            </div>
        </div >
    )
}

export default HomePage