import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccountInfo } from '../../redux/account/accountReducer'

const AccountEdit = () => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.account.info)

    const [name, setname] = useState(info.name)
    const [username, setusername] = useState(info.username)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateAccountInfo({name, username}))
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