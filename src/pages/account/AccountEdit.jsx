import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/user/userReducer'
import { logout } from '../../redux/user/userSlice'

const AccountEdit = () => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.user.user)

    const [name, setname] = useState(info.name)
    const [username, setusername] = useState(info.username)

    const handleSubmit = () => {
        dispatch(updateUser({ name, username }))
    }

    return (
        <div>
            <div className="pb-3">
                <h4>Edit Account</h4>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Name</span>
                <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"
                    value={name} onChange={e => { setname(e.target.value) }} />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2">Username</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2"
                    value={username} onChange={e => { setusername(e.target.value) }} />
            </div>

           

            <div className='d-flex justify-content-between'>
            <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
                <button className='btn btn-danger' onClick={() => { dispatch(logout()) }}>logout</button>
            </div>

        </div>
    )
}

export default AccountEdit