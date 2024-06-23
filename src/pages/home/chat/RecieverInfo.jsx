import React from 'react'

const RecieverInfo = ({ info }) => {
    console.log(info);
    return (
        <div className='card'>
            <img loading="lazy" src={info.profilePic} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{info.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{info.username}</h6>
            </div>
        </div>
    )
}

export default RecieverInfo