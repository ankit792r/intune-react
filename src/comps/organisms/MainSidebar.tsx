import { MessageCircle, Users, Settings, Image } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { changeActivePage } from '../../state/features/mainLayoutSlice'

type Props = {}

const MainSidebar = (props: Props) => {
  const dispatch = useAppDispatch()
  const activePage = useAppSelector(state => state.mainLayoutSlice.activePage)

  return (
    <div className="hidden lg:flex w-16 bg-white border-r border-gray-200 flex-col items-center py-4 space-y-6">
      <div className="flex flex-1 flex-col space-y-4">
        <Link to="/chat" onClick={() => { dispatch(changeActivePage("CHAT")) }} className={`w-10 h-10 ${activePage == "CHAT" ? 'bg-teal-500 text-white' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'} rounded-lg flex items-center justify-center`}>
          <MessageCircle />
        </Link>

        <Link to="/friends"
          onClick={() => { dispatch(changeActivePage("FRIENDS")) }}
          className={`w-10 h-10 ${activePage == "FRIENDS" ? 'bg-teal-500 text-white' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'} rounded-lg flex items-center justify-center`}>
          <Users />
        </Link>

        <Link to="/status"
          onClick={() => { dispatch(changeActivePage("STATUS")) }}
          className={`w-10 h-10 ${activePage == "STATUS" ? 'bg-teal-500 text-white' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'} rounded-lg flex items-center justify-center`}>
          <Image />
        </Link>
      </div>
      <div className="flex-shrink-0">
        <Link to="/settings"
          onClick={() => { dispatch(changeActivePage("SETTINGS")) }}
          className={`w-10 h-10 ${activePage == "SETTINGS" ? 'bg-teal-500 text-white' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'} rounded-lg flex items-center justify-center`}>
          <Settings />
        </Link>
      </div>
    </div>
  )
}

export default MainSidebar