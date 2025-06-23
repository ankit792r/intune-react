import { Outlet, useNavigate } from "react-router-dom"
import MainSidebar from "../comps/organisms/MainSidebar"
import { useAppSelector } from "../state/hooks"
import { useEffect } from "react"
import { WebSocketProvider } from "../context/webSocketContext"


const MainLayout = () => {
  const navigate = useNavigate()
  const userLoggedIn = useAppSelector(state => state.userReducer.isLoggedIn)

  useEffect(() => {
    if (!userLoggedIn) navigate("/auth")
  }, [navigate, userLoggedIn])

  return (
    <WebSocketProvider>
      <main className="h-screen overflow-hidden">
        <div className="flex h-full">
          <MainSidebar />
          <Outlet />
        </div>
      </main>
    </WebSocketProvider>
  )
}

export default MainLayout