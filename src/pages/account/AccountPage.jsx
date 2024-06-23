import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const AccountPage = () => {
    return (
        <div className='container'>
            <div className="py-5">
                <div className="row g-4">
                    <div className="col-4">
                        <div className="list-group">
                            <Link to={`/account`} className="list-group-item list-group-item-action" aria-current="true">
                                <h5 className="mb-1">account</h5>
                            </Link>
                            <Link to={``} className="list-group-item list-group-item-action" aria-current="true">
                                <h5 className="mb-1">security</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="col-8">
                        <Outlet />
                    </div>

                </div>
            </div >
        </div>
    )
}

export default AccountPage