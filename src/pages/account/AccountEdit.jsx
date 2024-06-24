import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/user/userReducer'
import { logout } from '../../redux/user/userSlice'
import Spinner from "../../components/Spinner";

const AccountEdit = () => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.user.user)
    const status = useSelector(state => state.user.status)
    const [name, setname] = useState(info.name)
    const [username, setusername] = useState(info.username)

    const [profile, setprofile] = useState(null)
    const [profilePicUrl, setprofilePicUrl] = useState(info.profilePic)

    const handleSubmit = () => {
        dispatch(updateUser({ name, username, profile }))
    }

    return (
        <div>
            <div className="pb-3">
                <h4>Edit Account</h4>
            </div>
            <img loading="lazy" src={profilePicUrl == null ? "profile.png" : profilePicUrl} className="rounded mx-auto d-block" width="30%" alt="profile pic" />
            <div className="input-group my-3">
                <input type="file" className="form-control" id="inputGroupFile02"
                    onChange={e => { setprofilePicUrl(URL.createObjectURL(e.target.files[0])); setprofile(e.target.files[0]) }} />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"
                    value={name} onChange={e => { setname(e.target.value) }} />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Username</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2"
                    value={username} onChange={e => { setusername(e.target.value) }} />
            </div>



            <div className='d-flex justify-content-between'>
                {
                    status == "loading" ? <Spinner/> : <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                }
                <button className='btn btn-danger' onClick={() => { dispatch(logout()) }}>logout</button>
            </div>

        </div>
    )
}

export default AccountEdit