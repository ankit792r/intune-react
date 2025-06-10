import { Outlet } from 'react-router-dom'
import SettingsSideBar from '../organisms/setting/SettingsSideBar'

type Props = {}

const SettingsPage = (props: Props) => {
  return (
    <>
      <div className="hidden md:flex w-80 bg-white border-r border-gray-200 flex-col">
        <SettingsSideBar />
      </div>
      <div className="flex-1 flex flex-col bg-white">
        <Outlet />
      </div>
    </>
  )
}

export default SettingsPage