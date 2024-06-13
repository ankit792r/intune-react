import AuthMiddleware from "../../components/AuthMiddleware"
import AccountPage from "./AccountPage"


const profileRoute = {
    path: "/account",
    element: (<AuthMiddleware>
        <AccountPage />
    </AuthMiddleware>)
}

export default profileRoute