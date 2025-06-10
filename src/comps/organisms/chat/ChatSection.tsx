import ChatBody from '../../molecules/chat/ChatBody'
import ChatFooter from '../../molecules/chat/ChatFooter'
import ChatHeader from '../../molecules/chat/ChatHeader'

type Props = {}

const ChatSection = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col bg-slate-100">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  )
}

export default ChatSection