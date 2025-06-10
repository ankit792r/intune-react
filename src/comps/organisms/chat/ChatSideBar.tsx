import SideSearchBar from '../../atoms/SideSearchBar'
import ChatListHeader from '../../molecules/chat/ChatListHeader'
import ChatList from '../../molecules/chat/ChatList'

type Props = {}

const ChatSideBar = (props: Props) => {
    return (
        <div className="hidden md:flex w-80 border-r border-gray-200 flex-col">
            <div className="p-4">
                <SideSearchBar />
            </div>
            <ChatListHeader />
            <ChatList />
        </div>
    )
}

export default ChatSideBar