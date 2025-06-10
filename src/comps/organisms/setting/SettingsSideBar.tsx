import LogoutButton from '../../atoms/LogoutButton'
import SideSearchBar from '../../atoms/SideSearchBar'
import SettingsList from '../../molecules/setting/SettingsList'

type Props = {}

const SettingsSideBar = (props: Props) => {
    return (
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4">
                <SideSearchBar />
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="py-2">
                    <SettingsList />
                </div>
            </div>
            <div className="p-4 border-t border-gray-200">
                <LogoutButton />
            </div>
        </div>
    )
}

export default SettingsSideBar