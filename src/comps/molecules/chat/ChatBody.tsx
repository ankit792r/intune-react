import MessageBubble from '../../atoms/chat/MessageBubble'
import TypingIndicator from '../../atoms/chat/TypingIndicator'

type Props = {}

const ChatBody = (props: Props) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <MessageBubble />
      <MessageBubble />
      <TypingIndicator />
    </div>
  )
}

export default ChatBody