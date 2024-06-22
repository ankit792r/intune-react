import React from "react";

const Message = ({ message, myId }) => {
    const bg = message.creator === myId ? "bg-body-secondary" : "bg-primary-subtle"
    const just = message.creator === myId ? "end" : "start"

    return <div className={`mb-1 d-flex justify-content-${just}`} >
        <span className={`p-2 ${bg} rounded`} style={{ maxWidth: "60%" }}>
            {message.content}
        </span>
    </div>;
};

export default Message;
