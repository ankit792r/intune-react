import React from 'react'
import { useParams } from 'react-router-dom'

const ChatSection = () => {
    const params = useParams()

    const content = (
        <div>{params.chatId}</div>
    )

    if (params.chatId) {
        return content
    } else {
        return (<div>ChatSection</div>)
    }

}

export default ChatSection