import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <div>
                <div>
                    <Link to="/profile">Username or Name</Link> <Link to="/settings">settings</Link>
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