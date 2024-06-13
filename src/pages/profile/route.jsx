import AuthMiddleware from "../../components/AuthMiddleware"
import ProfilePage from "./ProfilePage"

const profileRoute = {
    path: "/profile",
    element: (<AuthMiddleware>
        <ProfilePage />
    </AuthMiddleware>)
}

export default profileRoute