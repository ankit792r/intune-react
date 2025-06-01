import MessageInput from '../atoms/MessageInput'
import SendButton from '../atoms/SendButton'

type Props = {}

const ChatFooter = (props: Props) => {
    return (
        <div className="p-4">
            <div className="flex bg-white items-center space-x-3 border border-gray-200 rounded-2xl p-2">
                <MessageInput />
                <SendButton />
            </div>
        </div>
    )
}

export default ChatFooter