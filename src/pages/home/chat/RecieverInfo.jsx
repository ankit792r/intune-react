import React from 'react'

const RecieverInfo = ({ info }) => {
    console.log(info);
    return (
        <div className='card'>
            <img loading="lazy" src={info.profilePic} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{info.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{info.username}</h6>
            </div>
        </div>
    )
}

export default RecieverInfo