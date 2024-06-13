import AuthPage from "./AuthPage"
import Signin from "./Signin"
import Signup from "./Signup"

const authRoute = {
    path: "/auth",
    element: <AuthPage />,
    children: [
        {
            path: "",
            element: <Signin />
        },
        {
            path: "signup",
            element: <Signup />
        },
    ]
}

export default authRoute