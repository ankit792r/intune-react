import AuthMiddleware from "../../components/AuthMiddleware"
import HomePage from "./HomePage"
import ChatSection from "./chat/ChatSection"

const homeRoute = {
    path: "/home",
    element: (<AuthMiddleware>
        <HomePage/>
    </AuthMiddleware>),
    children: [
        {
            path: "",
            element: <ChatSection/>,
        },
        {
            path: ":chatId",
            element: <ChatSection/>
        },
    ]
}

export default homeRoute