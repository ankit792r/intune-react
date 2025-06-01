import ChatBody from '../molecules/ChatBody'
import ChatFooter from '../molecules/ChatFooter'
import ChatHeader from '../molecules/ChatHeader'

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