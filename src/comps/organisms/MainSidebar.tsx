import { MessageCircle, Users, Settings, Image } from 'lucide-react'

type Props = {}

const MainSidebar = (props: Props) => {
  return (
    <div className="hidden lg:flex w-16 bg-white border-r border-gray-200 flex-col items-center py-4 space-y-6">
      <div className="flex flex-1 flex-col space-y-4">
        <button className="w-10 h-10 bg-teal-500 text-white rounded-lg flex items-center justify-center">
          <MessageCircle />
        </button>

        <button
          className="w-10 h-10 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg flex items-center justify-center">
          <Users />
        </button>

        <button
          className="w-10 h-10 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg flex items-center justify-center">
          <Image />
        </button>
      </div>
      <div className="flex-shrink-0">
        <button
          className="w-10 h-10 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg flex items-center justify-center">
          <Settings />
        </button>
      </div>
    </div>
  )
}

export default MainSidebar