import React from 'react'

const RecieverInfo = ({ info }) => {
    return (
        <div className='card'>
            <img src="https://silvawebdesigns.com/wp-content/uploads/2021/04/json-beautifier-online.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{info.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{info.username}</h6>
            </div>
        </div>
    )
}

export default RecieverInfo