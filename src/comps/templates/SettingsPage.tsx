import SettingsSideBar from '../organisms/SettingsSideBar'
import { Outlet } from 'react-router-dom'

type Props = {}

const SettingsPage = (props: Props) => {
  return (
    <div className="flex h-screen">
      <div className="w-80 bg-white border-r border-gray-200 flex">
        <SettingsSideBar />
      </div>
      <div className="flex-1 flex flex-col">
          <Outlet />
      </div>
    </div>
  )
}

export default SettingsPage