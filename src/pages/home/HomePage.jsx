import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { fetchChats } from '../../redux/user/userReducer'
import Spinner from '../../components/Spinner'

const HomePage = () => {
    const dispatch = useDispatch()
    const fetched = useRef(false)
    const name = useSelector(state => state.user.user.name);
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
            <div class="row g-4">
                <div class="col-3">

                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://silvawebdesigns.com/wp-content/uploads/2021/04/json-beautifier-online.jpg" class="img-fluid rounded-start" alt="..." style={{ objectFit: "cover", width: "100%", height: "100%", }} />
                            </div>
                            <div class="col">
                                <div class="card-body">
                                    <h5 class="card-title">{name}</h5>
                                    <div class="card-text"><Link to="/account">account</Link> <Link to="/requests">requests</Link> </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="list-group">
                        {
                            status === "loading"
                                ? <Spinner/>
                                : <div>
                                    <p className='fw-bold mt-2'>Chats</p>
                                    <div class="list-group">
                                        {
                                            chats.map((chat, index) => {
                                                return (
                                                    <Link to={`/home/${index}`} class="list-group-item list-group-item-action" >
                                                        <h6 class="mb-1">{chat.name}</h6>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                        }
                    </div>
                </div>
                <div class="col">
                    <Outlet />
                </div>

            </div>
        </div >
    )
}

export default HomePage