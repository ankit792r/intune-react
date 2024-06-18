import AuthMiddleware from "../../components/AuthMiddleware"
import RequestPage from "./RequestPage"

const requestRoute = {
    path: "/requests",
    element: (<AuthMiddleware>
        <RequestPage />
    </AuthMiddleware>)
}

export default requestRoute