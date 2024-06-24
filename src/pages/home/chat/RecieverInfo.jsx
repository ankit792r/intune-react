import React from 'react'

const RecieverInfo = ({ info }) => {
    return (<>
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img
                            src={info.profilePic}
                            alt=""
                            style={{ width: "60px", height: "60px" }}
                            className="rounded-circle"
                        />
                        <div className="ms-3">
                            <p className="fw-bold mb-1">{info.name}</p>
                            <p className="text-muted mb-0">{info.username}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default RecieverInfo