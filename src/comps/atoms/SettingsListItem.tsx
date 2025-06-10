import React from 'react'
import type { ISettings } from '../molecules/setting/SettingsList'
import { Link } from 'react-router-dom'

type Props = {
  settings: ISettings
}

const SettingsListItem = (props: Props) => {
  return (
    <Link to={props.settings.link}
    // bg-teal-50 border-l-4 border-teal-500
      className="w-full flex items-center space-x-3 px-3 py-2.5 text-left hover:bg-gray-100 ">
      <div className="w-10 h-10 text-gray-600 rounded-lg flex items-center justify-center">
        {props.settings.icon}
      </div>
      <div className="flex-1">
        <div className="font-medium text-gray-800">{props.settings.name}</div>
        <div className="text-xs text-gray-500">{props.settings.description}</div>
      </div>
    </Link>
  )
}

export default SettingsListItem