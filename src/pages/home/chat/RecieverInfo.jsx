import React from 'react'

const RecieverInfo = ({ info }) => {
    console.log(info);
    return (<>
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <img
                            src={info.profilePic}
                            alt=""
                            style={{ width: "60px", height: "60px" }}
                            class="rounded-circle"
                        />
                        <div class="ms-3">
                            <p class="fw-bold mb-1">{info.name}</p>
                            <p class="text-muted mb-0">{info.username}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default RecieverInfo