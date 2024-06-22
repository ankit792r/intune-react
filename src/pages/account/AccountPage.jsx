import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const AccountPage = () => {
    return (
        <div className='container'>
            <div className="py-5">
                <div class="row g-4">
                    <div class="col-4">
                        <div class="list-group">
                            <Link to={`/account`} class="list-group-item list-group-item-action" aria-current="true">
                                <h5 class="mb-1">account</h5>
                            </Link>
                            <Link to={``} class="list-group-item list-group-item-action" aria-current="true">
                                <h5 class="mb-1">security</h5>
                            </Link>
                        </div>
                    </div>
                    <div class="col-8">
                        <Outlet />
                    </div>

                </div>
            </div >
        </div>
    )
}

export default AccountPage