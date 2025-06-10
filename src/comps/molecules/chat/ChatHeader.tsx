import ChatHeaderItem from '../../atoms/chat/ChatHeaderItem'

type Props = {}

const ChatHeader = (props: Props) => {
    return (
        <div className='p-4 border-b-2'>
            <ChatHeaderItem />
        </div>
    )
}

export default ChatHeader