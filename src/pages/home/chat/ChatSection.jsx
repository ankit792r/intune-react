import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ChatNavbar from './ChatNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { openChat } from '../../../redux/app/appReducers'

const ChatSection = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const opendChat = useSelector(state => state.app.opendChat);

    useEffect(() => {
        if (params.chatId) {
            dispatch(openChat(params.chatId))
        }
    }, [params.chatId])

    return (
        <div>
            <ChatNavbar name={opendChat.name} />

        </div>
    )
}

export default ChatSection