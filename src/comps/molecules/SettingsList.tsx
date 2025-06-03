import { Bell, Paintbrush2, Settings, User } from 'lucide-react';
import React, { type ReactNode } from 'react'
import SettingsListItem from '../atoms/SettingsListItem';

type Props = {}

export interface ISettings {
    name: string;
    description: string;
    icon: ReactNode,
    link: string
}

const settings: ISettings[] = [
    {
        name: "Profile",
        description: "Personal Informations",
        icon: <User />,
        link: "profile"
    },
    {
        name: "Account",
        description: "Security & privacy",
        icon: <Settings />,
        link: "account"
    },
    {
        name: "Notifications",
        description: "Alerts & Sounds",
        icon: <Bell />,
        link: "notifications"
    },
    {
        name: "Appearance",
        description: "Customize how the app looks",
        icon: <Paintbrush2 />,
        link: "appearance"
    },
]

const SettingsList = (props: Props) => {
    return (
        <div className="space-y-1">
            {settings.map((setting:ISettings) => <SettingsListItem settings={setting} />)}
        </div>
    )
}

export default SettingsList