import React from 'react'
import ChatItem from '../atoms/ChatItem';

type Props = {}

const ChatList = (props: Props) => {
    console.log(props);

    return (
        <div className="flex-1 overflow-y-auto scrollbar-hide">
            <ChatItem />
        </div>
    )
}

export default ChatList