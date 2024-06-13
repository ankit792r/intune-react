import AuthMiddleware from "../../components/AuthMiddleware"
import SettingPage from "./SettingPage"

const settingRoute = {
    path: "/settings",
    element: (<AuthMiddleware>
        <SettingPage />
    </AuthMiddleware>)
}

export default settingRoute