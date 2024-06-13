import AuthMiddleware from "../../components/AuthMiddleware"
import FriendsPage from "./FriendsPage"

const friendsRoute = {
    path: "/friends",
    element: (<AuthMiddleware>
        <FriendsPage />
    </AuthMiddleware>)
}

export default friendsRoute