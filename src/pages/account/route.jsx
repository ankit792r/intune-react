import AuthMiddleware from "../../components/AuthMiddleware"
import AccountEdit from "./AccountEdit"
import AccountPage from "./AccountPage"


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
    ]
}

export default accountRoute