import SearchBar from '../atoms/SideSearchBar'
import ChatListHeader from '../molecules/ChatListHeader'
import ChatList from '../molecules/ChatList'

type Props = {}

const ChatSideBar = (props: Props) => {
    return (
        <div className="hidden md:flex w-80 border-r border-gray-200 flex-col">
            <SearchBar />
            <ChatListHeader />
            <ChatList/>
        </div>
    )
}

export default ChatSideBar