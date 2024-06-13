import AuthMiddleware from "../../components/AuthMiddleware"
import AccountEdit from "./AccountEdit"
import AccountPage from "./AccountPage"
import FriendsList from "./FriendsList"


const accountRoute = {
    path: "/account",
    element: (<AuthMiddleware>
        <AccountPage />
    </AuthMiddleware>),
    children: [
        {
            path: "",
            element: <AccountEdit />
        },
        {
            path: "friends",
            element: <FriendsList />
        }
    ]
}

export default accountRoute