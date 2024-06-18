import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/user/userReducer'

const AccountEdit = () => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.user.user)

    const [name, setname] = useState(info.name)
    const [username, setusername] = useState(info.username)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser({name, username}))
    }

    return (
        <div>
            <h4>Edit Account</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => { setname(e.target.value) }} /> <br />
                <input type="text" value={username} onChange={e => { setusername(e.target.value) }} /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default AccountEdit