import AuthMiddleware from "../../components/AuthMiddleware"
import AccountPage from "./AccountPage"


const accountRoute = {
    path: "/account",
    element: (<AuthMiddleware>
        <AccountPage />
    </AuthMiddleware>)
}

export default accountRoute