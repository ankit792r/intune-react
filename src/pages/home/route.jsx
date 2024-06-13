import HomePage from "./HomePage"
import ChatSection from "./chat/ChatSection"

const homeRoute = {
    path: "/home",
    element: <HomePage />,
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