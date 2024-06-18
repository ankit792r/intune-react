import AuthMiddleware from "../../components/AuthMiddleware"
import ServerStats from "../../components/ServerStats"
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
            element: <ServerStats/>,
        },
        {
            path: ":chatId",
            element: <ChatSection/>
        },
    ]
}

export default homeRoute