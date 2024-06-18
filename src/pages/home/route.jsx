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
            element: (<h1>Server states</h1>),
        },
        {
            path: ":chatId",
            element: <ChatSection/>
        },
    ]
}

export default homeRoute